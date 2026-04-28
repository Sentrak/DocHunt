import asyncio
import os
import time

from fastapi import APIRouter, File, HTTPException, UploadFile

from analyzers.pdf import PdfAnalyzer
from config import ANALYSIS_TIMEOUT, MAX_FILE_SIZE, PDF_MAGIC, ALLOWED_PDF_EXTENSIONS
from logger import logger
from models.result import PdfAnalysisResult

router = APIRouter(prefix="/analyze", tags=["pdf"])

_pdf_analyzer = PdfAnalyzer()


def _validate_pdf(data: bytes, filename: str) -> None:
    """Valide la taille et les magic bytes du PDF."""
    if len(data) > MAX_FILE_SIZE:
        raise HTTPException(
            status_code=413,
            detail=f"Fichier trop volumineux. Maximum : {MAX_FILE_SIZE // (1024 * 1024)} Mo.",
        )
    if not data.startswith(PDF_MAGIC):
        raise HTTPException(
            status_code=415,
            detail="Le fichier n'est pas un PDF valide (magic bytes incorrects).",
        )
    ext = os.path.splitext(filename)[-1].lower()
    if ext not in ALLOWED_PDF_EXTENSIONS:
        raise HTTPException(
            status_code=415,
            detail="Extension non autorisée. Seuls les fichiers .pdf sont acceptés.",
        )


@router.post("/pdf", response_model=PdfAnalysisResult)
async def analyze_pdf(file: UploadFile = File(...)) -> PdfAnalysisResult:
    data = await file.read()
    filename = file.filename or "document.pdf"

    logger.info("[PDF] Received filename=%s size=%d bytes", filename, len(data))

    _validate_pdf(data, filename)
    logger.debug("[PDF] Validation OK")

    t0 = time.perf_counter()
    try:
        result = await asyncio.wait_for(
            asyncio.to_thread(_pdf_analyzer.analyze, data, filename),
            timeout=ANALYSIS_TIMEOUT,
        )
    except asyncio.TimeoutError:
        logger.warning("[PDF] Analysis timed out after %ds for %s", ANALYSIS_TIMEOUT, filename)
        raise HTTPException(
            status_code=408,
            detail="L'analyse a dépassé le délai maximum autorisé.",
        )
    except Exception as e:
        logger.error("[PDF] Analysis failed for %s: %s", filename, e)
        raise HTTPException(
            status_code=422,
            detail=f"Impossible de lire ce PDF : {str(e)}",
        )

    elapsed = time.perf_counter() - t0
    logger.info(
        "[PDF] Done in %.3fs — score=%d fields=%d matches=%d warnings=%d",
        elapsed,
        result.risk_score,
        len(result.fields),
        len(result.sensitive_matches),
        len(result.warnings),
    )
    return result

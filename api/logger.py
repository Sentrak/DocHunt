import logging
import os
from pathlib import Path

from dotenv import load_dotenv

# Load the API's own .env at import time so DEBUG_ANALYSIS is always available,
# regardless of which process (reloader or worker) imports this module first.
load_dotenv(Path(__file__).parent / ".env", override=False)

DEBUG_ANALYSIS = os.getenv("DEBUG_ANALYSIS", "false").lower() == "true"

logger = logging.getLogger("dochunt")


def setup_logging() -> None:
    if logger.handlers:
        return  # already configured — avoid duplicate handlers on reload
    level = logging.DEBUG if DEBUG_ANALYSIS else logging.INFO
    handler = logging.StreamHandler()
    handler.setFormatter(
        logging.Formatter(
            "%(asctime)s [%(levelname)-5s] %(name)s — %(message)s",
            datefmt="%H:%M:%S",
        )
    )
    logger.setLevel(level)
    logger.addHandler(handler)
    logger.propagate = False
    if DEBUG_ANALYSIS:
        logger.debug("Debug analysis mode enabled (DEBUG_ANALYSIS=true)")

# DocHunt

**Scan your files for hidden metadata and sensitive data before sharing them.**

DocHunt is an open source tool that inspects PDF and image files to surface hidden information: author, software used, GPS coordinates, emails, phone numbers, IBANs, and much more — without ever sending your files to a server.

---

## Features

- **PDF analysis** — document metadata (author, creator software, dates), embedded JavaScript, attached files, hidden URLs
- **Image analysis** — full EXIF data, precise GPS coordinates, camera make and model
- **Sensitive data detection** via regex and NER (spaCy): emails, phone numbers, IBANs, SIRET/SIREN, social security numbers, IP addresses, GPS coordinates in text, license plates, usernames, passwords…
- **Risk score** from 0 to 100 based on the criticality of detected data
- **100% in-memory processing** — no file written to disk, no data stored
- **Multilingual UI** — English, French, Spanish, German

---

## Tech stack

| Layer | Technology |
|-------|------------|
| Backend | AdonisJS 6 (Node.js ≥ 24, TypeScript ESM) |
| Frontend | React 19 + Inertia.js + TailwindCSS 4 |
| ORM | Lucid + SQLite |
| Analysis microservice | Python 3.13, FastAPI, pikepdf, pdfplumber, Pillow, spaCy |
| Auth | Session-based (`@adonisjs/auth`) |
| Tests | Japa |

---

## Quick start

### Prerequisites

- Node.js ≥ 24
- Docker & Docker Compose (for the Python microservice)

### Installation

```bash
git clone https://github.com/Sentrak/DocHunt.git
cd DocHunt

# Node dependencies
npm install

# Environment variables
cp .env.example .env
# Fill in APP_KEY with: node ace generate:key
```

### Run in development

```bash
# Terminal 1 — Python microservice
docker compose up -d

# Terminal 2 — AdonisJS server with HMR
node ace serve --hmr
```

The app is available at [http://localhost:3333](http://localhost:3333).

---

## Python microservice (without Docker)

```bash
cd api
python -m venv .venv
.venv/Scripts/activate   # Windows
# source .venv/bin/activate  # Linux / macOS
pip install -r requirements.txt
python -m spacy download fr_core_news_md
uvicorn main:app --reload --port 8000
```

Interactive docs: [http://localhost:8000/docs](http://localhost:8000/docs)

---

## Debug mode

To see detailed analysis logs in the terminal:

```bash
# api/.env
DEBUG_ANALYSIS=true
```

Then rebuild Docker:

```bash
docker compose up -d --build api
docker compose logs -f api
```

Logs show the full analysis flow (fields found, regex matches, NER, score) without ever logging file content.

---

## Environment variables

| Variable | Description | Default |
|----------|-------------|---------|
| `APP_KEY` | AdonisJS encryption key (`node ace generate:key`) | — |
| `PORT` | Node server port | `3333` |
| `ANALYZER_URL` | Python microservice URL | `http://localhost:8000` |
| `DEBUG_ANALYSIS` | Detailed Python analysis logs | `false` |

---

## Useful commands

```bash
node ace serve --hmr              # Dev with hot reload
node ace build                    # Production build
node ace test                     # Run tests
npm run lint                      # ESLint
npm run typecheck                 # TypeScript check

docker compose up -d              # Start Docker services
docker compose logs -f api        # Python microservice logs
docker compose up -d --build api  # Rebuild after Python changes
```

---

## Contributing

Contributions are welcome.

1. Fork the project
2. Create a branch (`git checkout -b feat/my-feature`)
3. Commit your changes (`git commit -m 'feat: description'`)
4. Push (`git push origin feat/my-feature`)
5. Open a Pull Request

To report a bug or suggest a feature, open an [issue](https://github.com/Sentrak/DocHunt/issues).

---

## License

This project is licensed under the MIT License.

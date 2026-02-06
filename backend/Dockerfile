# 1. BASE IMAGE
# Usiamo una versione "slim" di Python (basata su Debian).
# È leggera ma contiene gli strumenti base di Linux.
FROM python:3.10-slim

# 2. VARIABILI D'AMBIENTE DI SISTEMA
# PYTHONDONTWRITEBYTECODE: Evita che Python crei file .pyc (inutili in Docker).
# PYTHONUNBUFFERED: Cruciale. Fa sì che i log di Python escano subito nella console
# di Docker senza essere "bufferizzati". Se il codice crasha, vuoi vedere l'errore subito.
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# 3. DIRECTORY DI LAVORO
# Creiamo una cartella /app dentro il container e ci posizioniamo lì.
WORKDIR /app

# 4. DIPENDENZE DI SISTEMA (Il "Driver Layer")
# Installiamo gcc e libpq-dev per poter compilare psycopg2 (il driver Postgres).
# --no-install-recommends tiene l'immagine piccola.
# rm -rf pulisce la cache di apt per risparmiare spazio.
RUN apt-get update && apt-get install -y \
    gcc \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

# 5. DIPENDENZE PYTHON
# Copiamo PRIMA solo il file dei requisiti.
# Perché? Docker usa una cache. Se modifichi il codice ma non i requisiti,
# Docker salterà questo step (che è lento) e passerà subito alla copia del codice.
COPY requirements.txt /app/
RUN pip install --upgrade pip && pip install -r requirements.txt

# 6. CODICE SORGENTE
# Copiamo tutto il resto della cartella 'backend' dentro '/app'.
COPY . /app/

# 7. COMANDO DI AVVIO (Entrypoint)
# Questo è il comando che viene lanciato quando il container si accende.
# 0.0.0.0:8000 rende il server visibile all'esterno del container.
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
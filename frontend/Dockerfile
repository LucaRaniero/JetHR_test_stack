# 1. BASE IMAGE
# Usiamo Node versione 20 (LTS) su Linux Slim
FROM node:20-slim

# 2. DIRECTORY DI LAVORO
WORKDIR /app

# 3. GESTIONE DIPENDENZE
# Copiamo package.json e package-lock.json PRIMA del codice.
# Questo permette a Docker di cachare l'installazione dei moduli.
# Se cambi il codice JS ma non aggiungi librerie, questo step viene saltato (velocità!).
COPY package*.json ./

# Installiamo le librerie (crea la cartella node_modules)
RUN npm install

# 4. CODICE SORGENTE
# Copiamo tutto il resto
COPY . .

# 5. ESPOSIZIONE E AVVIO
# Vite di default gira sulla porta 5173.
EXPOSE 5173

# --host è CRUCIALE: dice a Vite di accettare connessioni dall'esterno del container
# (altrimenti risponderebbe solo a localhost interno e tu non vedresti nulla).
CMD ["npm", "run", "dev", "--", "--host"]
# Utiliser l'image officielle Node.js
FROM node:16

# Créer un répertoire pour l'application
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le code de l'application, y compris le fichier .env
COPY . .

# Charger les variables d'environnement
ENV NODE_ENV=production
ENV PORT=3002
ENV MONGO_URI=mongodb+srv://Nelsa:nelsa@cluster0.fm5g7.mongodb.net/taskmaster?retryWrites=true&w=majority&appName=Cluster0

# Exposer le port 3002
EXPOSE 3002

# Lancer l'application
CMD ["node", "src/app.js"]

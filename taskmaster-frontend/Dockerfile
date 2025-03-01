# Étape 1 : Construction avec Node.js
FROM node:18-alpine AS build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

# Étape 2 : Utilisation de 'serve' pour servir les fichiers React
FROM node:18-alpine

# Installer 'serve'
RUN npm install -g serve

# Copier les fichiers de build React
COPY --from=build /app/build /usr/share/nginx/html

# Exposer le port 3001
EXPOSE 3001

# Utiliser serve pour servir l'application React
CMD ["serve", "-s", "/usr/share/nginx/html", "-l", "3001"]

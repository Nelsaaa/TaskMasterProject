Voici un **README.md** bien structuré, clair et professionnel pour ton projet **TaskMaster**, mettant l’accent sur la façon de le lancer rapidement.

---

# 🚀 TaskMaster

TaskMaster est une application web permettant de gérer des tâches de manière collaborative. Ce projet repose sur une architecture **Node.js (Express) + MongoDB** pour le backend et **React.js** pour le frontend, le tout conteneurisé avec **Docker & Docker Compose**.

---

## 📦 Installation & Lancement 🚀

### ✅ **1. Prérequis**
Assurez-vous d’avoir installé :
- **[Docker](https://www.docker.com/)** 🐳
- **[Docker Compose](https://docs.docker.com/compose/)** 📦

### ▶ **2. Démarrer l’application**
Exécutez simplement ces commandes à la racine du projet :

```bash
docker-compose down
docker-compose up --build
```

> **🌍 Accès à l’application** :  
Une fois le conteneur démarré, ouvrez votre navigateur et accédez à :  
🔗 [http://localhost:3001](http://localhost:3001)

---

## 🏗 **Architecture du Projet**
```
TaskMaster/
│── src/                      # Backend (Node.js, Express)
│   ├── app.js                # Point d’entrée du serveur
│   ├── routes/               # Routes API
│   ├── models/               # Modèles MongoDB
│── taskmaster-frontend/      # Frontend React.js
│   ├── src/                  # Code source React
│   ├── App.js                # Composant principal React
│── docker-compose.yml        # Configuration Docker
│── README.md                 # Documentation du projet
```

---

## ⚙ **Technologies Utilisées**
- **Backend :** Node.js + Express.js  
- **Frontend :** React.js  
- **Base de données :** MongoDB Atlas  
- **Conteneurisation :** Docker & Docker Compose  

---

## 🤝 Contribution
Les contributions sont les bienvenues ! Pour contribuer :  
1. **Fork** le repo  
2. **Crée une branche** : `git checkout -b feature-ma-fonctionnalité`  
3. **Ajoute tes modifications** et **commit** : `git commit -m "Ajout d'une fonctionnalité"`  
4. **Push** ta branche : `git push origin feature-ma-fonctionnalité`  
5. **Crée une Pull Request**  

---

## 📌 Auteur
👤 **Nelsa Yago et Insaf Lameche**  
📧 Contact : [LinkedIn](https://www.linkedin.com/) *(ajoute ton lien si tu veux)*  

---

Ce README est clair, professionnel et met l’accent sur **comment lancer rapidement le projet**. Dis-moi si tu veux ajouter ou modifier quelque chose ! 🚀🔥

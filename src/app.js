const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('../config/db');
require('dotenv').config();

const app = express();

// Middlewares
app.use(express.json());
app.use(morgan('dev'));



app.use((req, res, next) => {
  const allowedOrigins = ['http://localhost:3001', 'http://192.168.1.139:3000'];
  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);  // Définit UNE SEULE ORIGINE
  }

  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  next();
});




// Import des routes
const taskRoutes = require('./routes/taskRoutes');
app.use('/tasks', taskRoutes);

// Gestion des erreurs
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Une erreur est survenue !' });
});

// Connecter à MongoDB Atlas avant de démarrer le serveur
connectDB();

// Démarrage du serveur
const PORT = process.env.PORT || 3002;
app.listen(PORT,'0.0.0.0', () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});
app.get('/', (req, res) => {
  res.send('API TaskMaster fonctionne 🚀');
});

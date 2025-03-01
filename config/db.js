const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connecté avec Atlas');
  } catch (err) {
    console.error('Erreur de connexion à MongoDB Atlas:', err);
    process.exit(1);
  }
};

module.exports = connectDB;

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import newsRouter from './routes/news.route.js';
import dotenv from "dotenv";
dotenv.config()
const app = express();

// Middleware
//app.use(cors());
app.use(bodyParser.json());  // Pour parser les données JSON dans les requêtes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
(async () => {
    try {
      // Connexion à MongoDB (assurez-vous d'utiliser la bonne URL)
      await mongoose.connect(process.env.MONGODB_URL);
      console.log('Connecté à MongoDB');
    } catch (err) {
      console.error('Erreur de connexion à MongoDB:', err);
    }
  })();

app.use('/api', newsRouter);

app.listen(process.env.PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${process.env.PORT}`);
});

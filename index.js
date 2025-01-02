import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import newsRouter from './routes/news.route.js';
import dotenv from "dotenv";
import axios from 'axios';
dotenv.config()
const app = express();




(async () => {
  try {
    console.log("Tentative d'ajout des articles...");

    const response = await axios.post("https://news-k7vt.onrender.com/api/add-news", [
      {
        title: "Les lunettes de réalité augmentée font leur retour chez Google",
        description: "Google relance ses lunettes de réalité augmentée après l'abandon des Google Glass en 2023.",
        content: "La firme de Mountain View avait abandonné ses Google Glass en 2023, dix ans après leur lancement. Aujourd'hui, Google annonce le retour de ses lunettes de réalité augmentée, intégrant des technologies avancées pour une expérience utilisateur améliorée.",
        author: "Franceinfo",
        source: {
          name: "Franceinfo",
          url: "https://www.francetvinfo.fr/sciences/high-tech/"
        },
        category: "Technologie",
        tags: ["Google", "Réalité augmentée", "Lunettes connectées"],
        image: null,
        Country: "France",
        liker: 0,
        dislike: 0
      }
    ]);

    console.log("Ajout réussi :", response.data);
  } catch (error) {
    console.error("Erreur lors de l'ajout des articles :", error.message);
  }
})();
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

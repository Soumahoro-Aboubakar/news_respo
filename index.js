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
      },
      {
        title: "Uber by Woman pour garantir la sécurité des femmes !",
        description: "Uber lance un nouveau service pour assurer la sécurité des passagères en France.",
        content: "Uber a annoncé le lancement de 'Uber by Woman', un service dédié aux femmes, visant à garantir leur sécurité lors de leurs déplacements. Ce service permet aux passagères de choisir des conductrices femmes pour leurs trajets.",
        author: "Futura-Sciences",
        source: {
          name: "Futura-Sciences",
          url: "https://www.futura-sciences.com/tech/technologie/actualites/"
        },
        category: "Technologie",
        tags: ["Uber", "Sécurité", "Femmes"],
        image: null,
        Country: "France",
        liker: 0,
        dislike: 0
      },
      {
        title: "ChatGPT : la France veut l'interdire en 2025 ?",
        description: "Le gouvernement français envisage d'interdire ChatGPT en 2025.",
        content: "Selon des sources gouvernementales, la France pourrait interdire l'utilisation de ChatGPT dès 2025, invoquant des préoccupations liées à la sécurité et à la protection des données des utilisateurs.",
        author: "Futura-Sciences",
        source: {
          name: "Futura-Sciences",
          url: "https://www.futura-sciences.com/tech/technologie/actualites/"
        },
        category: "Technologie",
        tags: ["ChatGPT", "Interdiction", "France"],
        image: null,
        Country: "France",
        liker: 0,
        dislike: 0
      },
      {
        title: "L'Ukraine crée un missile surprise propulsé par IA",
        description: "L'Ukraine développe un nouveau missile utilisant l'intelligence artificielle pour sa propulsion.",
        content: "L'Ukraine a dévoilé un nouveau missile doté d'un système de propulsion innovant basé sur l'intelligence artificielle, augmentant ainsi sa précision et son efficacité sur le champ de bataille.",
        author: "Futura-Sciences",
        source: {
          name: "Futura-Sciences",
          url: "https://www.futura-sciences.com/tech/technologie/actualites/"
        },
        category: "Technologie",
        tags: ["Ukraine", "Missile", "Intelligence artificielle"],
        image: null,
        Country: "Ukraine",
        liker: 0,
        dislike: 0
      },
      {
        title: "En 2024, les attaques de fichiers malveillants ont explosé",
        description: "Les cyberattaques utilisant des fichiers malveillants ont connu une hausse significative en 2024.",
        content: "Selon un rapport récent, l'année 2024 a vu une augmentation exponentielle des cyberattaques impliquant des fichiers malveillants, mettant en évidence la nécessité de renforcer les mesures de cybersécurité.",
        author: "20 Minutes",
        source: {
          name: "20 Minutes",
          url: "https://www.20minutes.fr/high-tech/"
        },
        category: "Technologie",
        tags: ["Cyberattaques", "Fichiers malveillants", "Cybersécurité"],
        image: null,
        Country: "France",
        liker: 0,
        dislike: 0
      },
      {
        title: "Apple coupe le cordon avec Intel",
        description: "Apple finalise sa transition en abandonnant les processeurs Intel au profit de ses propres puces.",
        content: "Apple a annoncé l'achèvement de sa transition vers ses propres processeurs, délaissant définitivement les puces Intel pour équiper ses appareils, améliorant ainsi les performances et l'efficacité énergétique.",
        author: "20 Minutes",
        source: {
          name: "20 Minutes",
          url: "https://www.20minutes.fr/high-tech/"
        },
        category: "Technologie",
        tags: ["Apple", "Intel", "Processeurs"],
        image: null,
        Country: "États-Unis",
        liker: 0,
        dislike: 0
      },
      {
        title: "Révolution eGov au Kazakhstan : les services numériques transforment l'économie et la société",
        description: "Le Kazakhstan adopte des services numériques pour moderniser son économie et sa société.",
        content: "Le Kazakhstan a lancé une série de services numériques dans le cadre de sa stratégie eGov, visant à transformer l'économie et la société en facilitant l'accès aux services publics et en améliorant l'efficacité administrative.",
        author: "Euronews",
        source: {
          name: "Euronews",
          url: "https://fr.euronews.com/tag/nouvelles-technologies"
        },
        category: "Technologie",
        tags: ["Kazakhstan", "eGov", "Services numériques"],
        image: null,
        Country: "Kazakhstan",
        liker: 0,
        dislike: 0
      },
      {
        title: "L'application ChatGPT débarque sur Android",
        description: "ChatGPT est désormais disponible sur les appareils Android.",
        content: "L'application ChatGPT, développée par OpenAI, est maintenant accessible aux utilisateurs d'appareils Android, offrant des fonctionnalités avancées de génération de texte basée sur l'intelligence artificielle.",
        author: "Euronews",
        source: {
          name: "Euronews",
          url: "https://fr.euronews.com/tag/nouvelles-technologies"
        },
        category: "Technologie",
        tags: ["ChatGPT", "Android", "Intelligence artificielle"],
        image: null,
        Country: "International",
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
/*(async () => {
  try {
    // Connexion à MongoDB (assurez-vous d'utiliser la bonne URL)
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('Connecté à MongoDB');
  } catch (err) {
    console.error('Erreur de connexion à MongoDB:', err);
  }
})();*/

app.use('/api', newsRouter);

app.listen(process.env.PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${process.env.PORT}`);
});

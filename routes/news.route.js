import express from 'express'
import Article from "../models/news.model.js" // Assurez-vous d'avoir le bon chemin vers votre modèle

const router = express.Router();



// Route pour ajouter des nouvelles en utilisant insertMany
router.post('/add-news', async (req, res) => {
    //  console.log("en cours d'execution", req.body)
  console.log(req.body , " req.bodyreq.body")
    try {
        /*   [
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
                }]
              */
        const newsArray = req.body;  // Attendez-vous à recevoir un tableau d'articles
        const result = await Article.insertMany(req.body); // Insère plusieurs articles
        console.log("enregistrement reussi : ", result)
        res.status(201).json({ message: 'Articles ajoutés avec succès', data: result });
    } catch (err) {
        console.log('====================================');
        console.log(err.message);
        console.log('====================================');
        res.status(500).json({ message: 'Erreur lors de l\'ajout des articles', error: err });
    }
});

// Route pour récupérer toutes les nouvelles
router.get('/all-news', async (req, res) => {
    console.log("Nous fetchons les information")
    try {
        const news = await Article.find();  // Récupère tous les articles

        res.status(200).send(news);
    } catch (err) {
        console.log(err.message)
        res.status(500).json({ message: 'Erreur lors de la récupération des articles', error: err });
    }
});

// Route pour récupérer une news par son ID
router.get('/news/:id', async (req, res) => {
    const { id } = req.params;
    console.log('====================================');
    console.log(id, "  id000");
    console.log('====================================');
    try {
        const news = await Article.findById(id);  // Recherche une news avec l'ID
        console.log('====================================');
        console.log(news, " news");
        console.log('====================================');
        if (!news) {
            return res.status(404).json({ message: 'Article non trouvé' });
        }
        res.status(200).json(news);
    } catch (err) {
        console.log('====================================');
        console.log(err.message);
        console.log('====================================');
        res.status(500).json({ message: 'Erreur lors de la récupération de l\'article', error: err });
    }
});

// Route pour liker une news
router.patch('/like/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const news = await Article.findOneAndUpdate(
            { id },
            { $inc: { liker: 1 } },  // Incrémente le compteur de "liker"
            { new: true }
        );
        if (!news) {
            return res.status(404).json({ message: 'Article non trouvé' });
        }
        res.status(200).json(news);
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors du like de l\'article', error: err });
    }
});

// Route pour disliker une news
router.patch('/dislike/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const news = await Article.findOneAndUpdate(
            { id },
            { $inc: { dislike: 1 } },  // Incrémente le compteur de "dislike"
            { new: true }
        );
        if (!news) {
            return res.status(404).json({ message: 'Article non trouvé' });
        }
        res.status(200).json(news);
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors du dislike de l\'article', error: err });
    }
});

export default router;

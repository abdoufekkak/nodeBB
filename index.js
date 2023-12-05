// Importation d'Express
const express = require('express');

// Création de l'application Express
const app = express();

// Définition d'une route GET pour la racine ('/')
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Démarrage du serveur sur le port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

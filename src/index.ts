import http from "http";
const os = require('os');

// Définition d'une variable d'environnement pour choisir le port d'écoute du serveur
const port = process.env.PING_LISTEN_PORT || 3000;

// Création du serveur
const server = http.createServer((req, res) => {
  // Renvoie une réponse aux requêtes GET contenant les headers, sinon renvoie une réponse 404 vide
  if (req.method === "GET" && req.url === "/ping") {
    console.log(os.hostname())
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;

    const responseData = req.headers;

    res.end(JSON.stringify(responseData));
  } else {
    res.statusCode = 404;
    res.end();
  }
});

// Activation de l'écoute du serveur au port désiré
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

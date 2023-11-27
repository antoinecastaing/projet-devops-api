"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
// Définition d'une variable d'environnement pour choisir le port d'écoute du serveur
const port = process.env.PING_LISTEN_PORT || 3000;
// Création du serveur
const server = http_1.default.createServer((req, res) => {
    // Renvoie une réponse aux requêtes GET contenant les headers, sinon renvoie une réponse 404 vide
    if (req.method === "GET" && req.url === "/ping") {
        res.setHeader("Content-Type", "application/json");
        res.statusCode = 200;
        const responseData = req.headers;
        res.end(JSON.stringify(responseData));
    }
    else {
        res.statusCode = 404;
        res.end();
    }
});
// Activation de l'écoute du serveur au port désiré
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

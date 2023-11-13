"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const port = process.env.PING_LISTEN_PORT || 3000;
// Create an HTTP server
const server = http_1.default.createServer((req, res) => {
    if (req.method === "GET" && req.url === "/ping") {
        // Set the response headers
        res.setHeader("Content-Type", "application/json");
        res.statusCode = 200;
        // Define the response data
        const responseData = req.headers;
        // Convert the data to JSON and send it as a response
        res.end(JSON.stringify(responseData));
    }
    else {
        // Handle other requests or routes
        res.statusCode = 404;
        res.end();
    }
});
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

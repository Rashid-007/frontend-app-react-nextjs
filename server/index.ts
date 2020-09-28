import express, { Express } from "express";
import next from "next";
import nextI18NextMiddleware from "next-i18next/middleware";

import nextI18next from "../src/main/i18n/i18n";


const port = process.env.PORT || 3000;
const app = next({ dev: process.env.NODE_ENV !== "production" , dir: "./src/main"});
const handle = app.getRequestHandler();

(async () => {
    await app.prepare();
    const server = express();

    addMiddleware(server);
    routing(server);

    server.listen(port);
    // tslint:disable-next-line:no-console
    console.log(`> Ready on http://localhost:${port}`);
})();

/**
 * Inject all Express middleware
 * @param server 
 */

function addMiddleware(server: Express) {
    server.use(nextI18NextMiddleware(nextI18next))
}
/**
 * Defines all routes
 * @param server 
 */
function routing(server: Express) {
    server.get("*", (req, res) => handle(req, res))
}
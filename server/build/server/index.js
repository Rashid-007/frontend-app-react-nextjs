"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const next_1 = __importDefault(require("next"));
const middleware_1 = __importDefault(require("next-i18next/middleware"));
const i18n_1 = __importDefault(require("../src/main/i18n"));
const port = process.env.PORT || 3000;
const app = next_1.default({ dev: process.env.NODE_ENV !== "production", dir: "./src/main" });
const handle = app.getRequestHandler();
(async () => {
    await app.prepare();
    const server = express_1.default();
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
function addMiddleware(server) {
    server.use(middleware_1.default(i18n_1.default));
}
/**
 * Defines all routes
 * @param server
 */
function routing(server) {
    server.get("*", (req, res) => handle(req, res));
}

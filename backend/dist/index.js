"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const prom_client_1 = __importDefault(require("prom-client"));
const romanConverter_1 = require("./romanConverter");
const app = (0, express_1.default)();
const port = 8080;
// Middleware
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)('combined'));
// Prometheus metrics
const collectDefaultMetrics = prom_client_1.default.collectDefaultMetrics;
collectDefaultMetrics();
app.get('/metrics', async (_req, res) => {
    res.set('Content-Type', prom_client_1.default.register.contentType);
    res.end(await prom_client_1.default.register.metrics());
});
app.get('/romannumeral', (req, res) => {
    const query = req.query.query;
    const num = parseInt(query, 10);
    if (isNaN(num) || num < 1 || num > 3999) {
        res.status(400).send('Invalid input. Must be an integer between 1 and 3999.');
        return;
    }
    const output = (0, romanConverter_1.toRoman)(num);
    res.json({ input: num.toString(), output });
});
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

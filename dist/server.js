"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
// importing routes
const index_1 = __importDefault(require("./routes/index"));
const transaction_routes_1 = __importDefault(require("./routes/transaction.routes"));
const app = express_1.default();
// ==> Rotas da API:
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use(express_1.default.json({ type: 'application/vnd.api+json' }));
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', ' http://localhost:3001');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Pass to next layer of middleware
    next();
});
const setupCors = {
    origin: [
        "https://finance-app1-9zfu811sj-peacelo.vercel.app",
        "https://finance-app1.vercel.app"
    ],
    optionsSuccessStatus: 200
};
app.use(cors_1.default());
// import routes
app.use(index_1.default);
app.use(transaction_routes_1.default);
app.listen(process.env.PORT || 3001, () => console.log('caraleo'));
exports.default = app;

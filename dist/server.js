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
const index = require('./routes/index');
// const productRoute = require('./routes/product.routes');
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use(express_1.default.json({ type: 'application/vnd.api+json' }));
app.use(cors_1.default({
    origin: "*"
}));
// use routes
app.use(index_1.default);
app.use(transaction_routes_1.default);
// app.use(index);
// app.use('/api/', productRoute);
app.listen(3001, () => console.log('caraleo'));
exports.default = app;

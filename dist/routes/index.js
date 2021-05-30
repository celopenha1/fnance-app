"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const route = express_1.default.Router();
route.get('/', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'Seja bem-vindo(a) a API Node.js + PostgreSQL + Azure!',
        version: '1.0.0',
    });
});
exports.default = route;

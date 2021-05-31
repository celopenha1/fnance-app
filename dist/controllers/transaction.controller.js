"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../config/database"));
// ==> Método responsável por criar um novo 'Product':
class Transaction {
    static async create(request, response) {
        // BUILD QUERY STRING TO INSERT A NEW TRANSACTION ON TABLE!
        const queryString = "INSERT INTO transacao (title, value) VALUES ($1, $2)";
        console.log(request.body);
        const { value, title } = request.body;
        database_1.default.query(queryString, [title, value]).then(result => {
            response.status(201).json(result);
        }).catch(error => {
            response.send(error);
        });
    }
    static async get(request, response) {
        const queryString = "SELECT * FROM transacao ORDER BY create_at DESC";
        const result = await database_1.default.query(queryString, []);
        result.rowCount
            ? response.status(200).json(result.rows)
            : response.status(500).json({ error: "cannot get transactions" });
    }
}
exports.default = Transaction;

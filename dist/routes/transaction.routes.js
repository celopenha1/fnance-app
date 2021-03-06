"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const transaction_controller_1 = __importDefault(require("../controllers/transaction.controller"));
const router = express_1.default.Router();
router.get("/transaction", transaction_controller_1.default.get);
router.post("/transaction", transaction_controller_1.default.create);
exports.default = router;

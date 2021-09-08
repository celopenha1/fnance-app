import express from 'express';

const router = express.Router();

import conta from '../controllers/conta.controller';
// conta routes
router.get("/saldo", conta.get);

export default router;
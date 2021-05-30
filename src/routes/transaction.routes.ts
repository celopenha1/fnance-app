import express from 'express';
import transaction from '../controllers/transaction.controller';

const router = express.Router();


router.get("/transaction", transaction.get);

router.post("/transaction", transaction.create);


export default router;
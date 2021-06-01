import express from 'express';
import cors from 'cors';
// importing routes
import indexRouter from './routes/index';
import transactionRouter from './routes/transaction.routes';

import { Request, Response } from 'express';

const app = express();
// ==> Rotas da API:
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));

const setupCors = {
  origin: [
    "https://finance-app1-9zfu811sj-peacelo.vercel.app",
    "https://finance-app1.vercel.app"
  ],
  optionsSuccessStatus: 200
}

app.use(cors());
// import routes
app.use(indexRouter);
app.use(transactionRouter);


app.listen(process.env.PORT || 3001, () => console.log('caraleo'))


export default app;
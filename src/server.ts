import express from 'express';
import cors from 'cors';
// importing routes
import indexRouter from './routes/index';
import transactionRouter from './routes/transaction.routes';

import { Request, Response } from 'express';

const app = express();

// ==> Rotas da API:
const index = require('./routes/index');
// const productRoute = require('./routes/product.routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));


app.use((request: Request, response: Response, next) => {
  response.header("Access-Control-Allow-Origin", "https://finance-app1-9zfu811sj-peacelo.vercel.app/");
  response.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  app.use(cors());
  next();
});
// use routes
app.use(indexRouter);
app.use(transactionRouter);
// app.use(index);
// app.use('/api/', productRoute);

app.listen(process.env.PORT || 3001, () => console.log('caraleo'))


export default app;
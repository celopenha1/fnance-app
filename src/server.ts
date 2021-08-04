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




app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin',  ' http://localhost:3001');

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
}

app.use(cors());



// import routes
app.use(indexRouter);
app.use(transactionRouter);


app.listen(process.env.PORT || 3001, () => console.log('caraleo'))


export default app;
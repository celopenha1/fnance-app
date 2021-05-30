import express from 'express';
import cors from 'cors';
// importing routes
import indexRouter from './routes/index';
import transactionRouter from './routes/transaction.routes';


const app = express();

// ==> Rotas da API:
const index = require('./routes/index');
// const productRoute = require('./routes/product.routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors({
  origin: "*"
}));
// use routes
app.use(indexRouter);
app.use(transactionRouter);
// app.use(index);
// app.use('/api/', productRoute);

app.listen(process.env.PORT || 3001, () => console.log('caraleo'))


export default app;
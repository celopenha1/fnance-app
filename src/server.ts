import express from 'express';
import cors from 'cors';
// importing routes
import indexRouter from './routes/index';
import transactionRouter from './routes/transaction.routes';
import contaRouter from './routes/conta.routes';
import pg from 'pg';
// connection string
// postgres://username:password@hostname/databasename
const app = express();
// ==> Rotas da API:
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));

// this is the con string for elephantsql
// var conString = "postgres://kytkjqxi:KpWMrSa87-GOeNSivxLWSwFRIXVykEZa@batyr.db.elephantsql.com/kytkjqxi" //Can be found in the Details page
var conString = process.env.DATABASE_LOCAL;
var client = new pg.Client(conString);
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  console.log('conectado ao banco!');

});

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


app.use(cors());



// import routes
app.use(indexRouter);
app.use(transactionRouter);
app.use(contaRouter);

app.listen(process.env.PORT || 3002, () => console.log('caraleo'))


export default app;
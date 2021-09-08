import { Pool } from 'pg';


const dotenv = require('dotenv');
dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_LOCAL
});

pool.on('connect', () => console.log("Conectado no Bando !!"));

const query = {
  query: (text: string, params: Array<String>) => pool.query(text, params)
}

//NEWWW







export default query;
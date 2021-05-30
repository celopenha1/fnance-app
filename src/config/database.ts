import { Pool } from 'pg';
const dotenv = require('dotenv');
dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

pool.on('connect', () => console.log("Conectado no Bando !!"));

const query = {
  query: (text: string, params: Array<String>) => pool.query(text, params)
}

export default query;
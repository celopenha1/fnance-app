import { query, Request, Response } from 'express';
import db from '../config/database';

// ==> Método responsável por criar um novo 'Product':

class Transaction {
  static async create(request: Request, response: Response) {
    // BUILD QUERY STRING TO INSERT A NEW TRANSACTION ON TABLE!
    const queryString = "INSERT INTO transacao (title, value) VALUES ($1, $2)";

    console.log(request.body);
    const { value, title } = request.body;

    db.query(queryString, [title, value]).then(result => {
      response.status(201).json(result)
    }).catch(error => {
      response.send(error)
    })







  }

  static async get(request: Request, response: Response) {

    const queryString = "SELECT * FROM transacao ORDER BY create_at DESC";

    const result = await db.query(queryString, []);

    result.rowCount
      ? response.status(200).json(result.rows)
      : response.status(500).json({ error: "cannot get transactions" })

  }
}


export default Transaction;

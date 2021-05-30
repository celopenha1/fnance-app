import { query, Request, Response } from 'express';
import db from '../config/database';

// ==> Método responsável por criar um novo 'Product':

class Transaction {
  static async create(request: Request, response: Response) {
    // BUILD QUERY STRING TO INSERT A NEW TRANSACTION ON TABLE!
    const queryString = "INSERT INTO transacao (value, relevant) VALUES ($1, $2)";
    // GET VALUES FROM FORM
    const { value, relevant } = request.body;
    //  this is how pg queries works on node!!!!
    // const result = await db.query(queryString, [value, relevant]);
    // // VERIFY IS THE RESULT IS OK !!!


    // try {
    //   const result = await db.query(queryString, [value, relevant]);
    //   result.rowCount
    //     ? response.status(201).json({ message: `Valor R$ ${value} adicionado com sucesso!` })
    //     : response.status(500).json({ message: `Não foi possível adicionar o valor, tente novamente mais tarde!` })
    // } catch (error) {
    //   response.status(201).send(error)
    // }
    db.query(queryString, [value, relevant]).then(result => {
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

import { Request, Response } from 'express';
import db from '../config/database';
import DateUtil from '../util/Date';
class Transaction {

  static async create(request: Request, response: Response) {
    // BUILD QUERY STRING TO INSERT A NEW TRANSACTION ON TABLE!
    const queryString = "INSERT INTO transacao (title, value) VALUES ($1, $2)";

    const { value, title } = request.body;

    db.query(queryString, [title, value]).then(result => {
      response.status(201).json(result)
    }).catch(error => {
      response.send(error)
    })
  }

  static async get(request: Request, response: Response) {

    const queryString = "SELECT * FROM public.transacao ORDER BY created_at DESC";
    try{
      const result = await db.query(queryString, []);

      const transacoes = result.rows.map(transacao => {
        return {
          titulo: transacao.titulo,
          contaId: transacao.conta_id,
          categoria: transacao.categoria,
          tipo:transacao.tipo,
          data: DateUtil.parseDate(transacao.created_at),
          valor: transacao.valor
        }
      })
      result.rowCount
        ? response.status(200).json(transacoes)
        : response.status(500).json({ error: "cannot get transactions" })
    }catch(e){
      console.log(e)
    }
  }
}


export default Transaction;

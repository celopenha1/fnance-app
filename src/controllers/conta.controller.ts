import { Request, Response } from 'express';
import db from '../config/database';

class Conta {

  static async get(request: Request, response: Response) {
    // BUILD QUERY STRING TO INSERT A NEW TRANSACTION ON TABLE!

    const queryString = "SELECT * FROM conta WHERE usuario_id = $1 ";

    const contaId = '1';

    db.query(queryString, [contaId]).then(result => {
    if(result.rowCount > 0)
      response.status(201).json(result.rows[0]);
    else
        response.status(404).json({message: "saldo não encontrado"});
    }).catch(error => {
      response.send(error)
    })
  }

}


export default Conta;

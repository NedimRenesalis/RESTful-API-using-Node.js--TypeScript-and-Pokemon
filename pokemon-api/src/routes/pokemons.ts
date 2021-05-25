import {Request, Response} from "express";

import pokemons = require('../db.json'); //load our local database file

export class Pokemons { 
    
    public routes(app): void { //received the express instance from app.ts file         
        app.route('/pokemons')
        .get((req: Request, res: Response) => {            
            res.status(200).send(pokemons);
        })               
    }
}

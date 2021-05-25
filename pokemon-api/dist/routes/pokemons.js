"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokemons = void 0;
const pokemons = require("../db.json"); //load our local database file
class Pokemons {
    routes(app) {
        app.route('/pokemons')
            .get((req, res) => {
            res.status(200).send(pokemons);
        });
    }
}
exports.Pokemons = Pokemons;

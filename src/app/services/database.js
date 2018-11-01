const json = require('../db.json');

export class Database {

    constructor( ) {

    }

    select( qtd ) {
        return new Promise( ( resolve, reject ) => {
            let data;
            if ( json === undefined ) {
                reject();
            }
            if ( qtd === undefined ) {
                data = json.data;
            } else {
                data = json.data.slice(0, qtd);
            }
            resolve(data);
        });
    }
}
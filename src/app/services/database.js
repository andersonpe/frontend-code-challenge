const json = require('../db.json');

export class Database {

    constructor( ) {
        this.data = json;
    }

    select( qtd ) {
        return new Promise( ( resolve, reject ) => {
            let resultSet;
            if ( this.data === undefined ) {
                reject();
            }
            if ( qtd === undefined ) {
                resultSet = this.data.data;
            } else {
                resultSet = this.data.data.slice(0, qtd);
            }
            resolve(resultSet);
        });
    };
    
}
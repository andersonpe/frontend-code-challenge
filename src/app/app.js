import { Card } from "./card";
import { Database } from "./services/database";

export class App {

    constructor( ) {
        this.root = document.getElementsByTagName('my-app');
        this.database = new Database();
        this.cards = new Card();
        this.init();
    }

    init( ) {
        this.database.select( 10 ).then( ( data ) => {
            this.cards.init( this.root, data );
        }, () => {
            console.error('Erro');
        } );
    }

}    

let app = new App();

import { Card } from "./card";
import { Http } from "./services/http";

export class App {

    constructor( ) {
        this.root = document.getElementsByTagName('my-app');
        this.service = new Http();
        this.cards = new Card();
        this.url = "https://api.mcmakler.de/v1/advertisements";
        this.init();
    }

    init( ) {
        this.service.get( this.url ).then( ( data ) => {
            this.cards.init( this.root, data );
        }, ( error ) => {
            console.log(error);
        } );
    }

}    

let app = new App();




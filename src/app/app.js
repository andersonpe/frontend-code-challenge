import { Card } from "./card";
import { Http } from "./services/http";

// let doc = document.getElementsByTagName('my-app');

// let card = new Card().init();

// let services = new Http();
//     services.get('https://g1.globo.com').then((success) => {
//         console.log(success);
//     }, (error) => {
//         console.log('error');
//     });

export class App {

    constructor( ) {
        this.root = document.getElementsByTagName('my-app');
        this.services = new Http();
        this.cards = new Card();
        this.url = "https://api.mcmakler.de/v1/advertisements";
        this.url = "https://g1.globo.com";
        this.init();
    }

    init( ) {
        this.services.get( this.url ).then( ( data ) => {
            this.cards.init( this.root, data );
        }, ( error ) => {
            console.log(error);
        } );
    }

}    

let app = new App();




export class Card {

    constructor() {
        this.dataCount = 10;
        this.dataset = [];
        this.cards = [];
        this.root = null;
    }

    init( root, data ) {
       this.root = root;
       this.dataset = data;
       this.createCardItens();
       this.appendToGrid();
    };
    
    formatInfo ( data ) {
        let price = (1 === data.purpose) ? data.advertisementPrice.sellPrice : data.advertisementPrice.baseRent ;
        let elements = [];
        let elementsNames = [{type: 'span', text: price, appendText: '&euro;'},
                             {type: 'span', text: data.realestateSummary.numberOfRooms, appendText: ' Zimmer'},
                             {type: 'span', text: '', class: 'separator'},
                             {type: 'span', text: data.realestateSummary.space.toFixed(2), appendText: ' m<sup>2</sup>'}]

        for( let i = 0; i < elementsNames.length; i++ ) {
            elements.push( this.createHTMLElement( elementsNames[i] ) );                          
        }
        return elements;                 
    };

    formatAddress ( data ) {
        let aux = '';

        if ( data.userWishes.visibleAddress ) {
            let address = data.realestateSummary.address;
            aux += address.street;
            aux += ' ';
            aux += address.number; 
            aux += ' / ';
            aux += address.city;
        }
            
        return aux;
    };

    createHTMLElement ( config ) {
        let type = config.hasOwnProperty('type') ? config.type : 'div';
        let ele = document.createElement(type);

        if ( config.hasOwnProperty( 'class' ) ) {
            ele.setAttribute('class', config.class);
        }

        if ( config.hasOwnProperty( 'text' ) ) {
            if ( config.text != undefined ) {
                let text = config.text;
                if ( config.hasOwnProperty( 'appendText' ) ) {
                    text += config.appendText;
                }
                ele.innerHTML = text;
            }
        }
        
        if ( config.hasOwnProperty( 'children' ) ) {
            for( let i = 0; i < config.children.length; i++ ) {
                ele.appendChild( config.children[i] );
            }
        }
        return ele;
    };

    createCardContent ( data ) {
        let address = this.formatAddress( data );
        let info = this.formatInfo( data );

        let elementsNames = [ {name: 'cardContent', class: 'card-content', wrapper: true}, 
                              {name: 'cardInfoTitle', class: 'card-info-title', text: data.title}, 
                              {name: 'cardInfo', class: 'card-info', text: address},
                              {name: 'cardLowerInfo', class: 'card-lower-info', children: info}];
        let wrapper;
        let children = [];

        for( let i = 0 ; i < elementsNames.length; i++ ) {
            let ele = this.createHTMLElement( elementsNames[i] );
            if ( elementsNames[i].hasOwnProperty('wrapper') ) {
                wrapper = ele;
            } else {
                children.push( ele );
            }
        }

        for( let j = 0; j < children.length; j++ ) {
            wrapper.appendChild( children[j] );
        }
        return wrapper;
    };

    createCardCover ( assets, purpose ) {
        let cover = document.createElement('div');
        let innerSpan = document.createElement('span');
        let numberOfKeys = Object.keys(assets).length;
        let url;

        if ( 1 === numberOfKeys ) {    
            url = assets.advertisementThumbnails.inventory_m.url;
        } else {
            url = assets[0].advertisementThumbnails.inventory_m.url;                        
        }
        let backgroundImagem = "background-image: url('" + url +"')";
            
        cover.setAttribute('class','card-cover');
        cover.setAttribute('style', backgroundImagem);
            
        let purposeName = null;    
        if ( 1 === purpose ) {
            purposeName = 'Kaufen'; // To sell
        } else {
            purposeName = 'Mieten'; // To rent
        }
        innerSpan.innerText = purposeName;

        cover.appendChild(innerSpan);

        return cover;
    };

    createCard ( cardData ) {
        let card = document.createElement('div');
            card.setAttribute('class', 'card') ;

        let content = this.createCardContent( cardData );
        let cover = this.createCardCover( cardData.advertisementAssets, cardData.purpose );

        card.appendChild(cover);
        card.appendChild(content);

        return card;    
    };

    createCardItens (  ) {
        let cardItens = [];
        for( let i = 0; i < this.dataCount; i++ ) {
            cardItens.push( this.createCard( this.dataset[i] ) );
        }
        this.cards = cardItens;
    };

    appendToGrid( ) {
        let grid = document.querySelector('div.grid');
        for( let i = 0; i < this.dataCount; i++ ) {
            grid.appendChild(this.cards[i]);
        }
    };

}
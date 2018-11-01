export class Http {

    constructor( ){

    }

    get( url ) {
        return new Promise( (resolve, reject)  => {
            let aURL = `https://cors-proxy.htmldriven.com/?url=${url}`
            fetch(aURL).then(function(response) {
                return response.json();
            }).then(function(data) {
                let json = JSON.parse(data.body).data;
                resolve(json)
            }).catch(function(error) {
                reject(error);    
           });
        });
    }
    
}

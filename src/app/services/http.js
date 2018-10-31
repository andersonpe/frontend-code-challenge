export class Http {

    constructor(){

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
        
        
        /*return new Promise(( success, error ) => {
            var anHttpRequest = new XMLHttpRequest();
            anHttpRequest.onreadystatechange = function() { 
                if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200) {
                    console.log(anHttpRequest);
                    success(anHttpRequest.responseText);
                } else {
                    error();
                }
            }
            let aURL = `https://cors-proxy.htmldriven.com/?url=${url}`
            anHttpRequest.open( "GET", aURL, true );            
            anHttpRequest.send( null );
        });*/
        /*return new Promise((resolve, reject) => {
            
            const xhr = new XMLHttpRequest();
           
            xhr.onerror = () => {
                this.onErrorItem(fakeItem, null, xhr.status, null);
                reject(xhr.statusText);
            };

            xhr.onabort = () => {
                this.onErrorItem(fakeItem, null, xhr.status, null);
                reject(xhr.statusText);
            };
         
            xhr.open('GET', aURL, true);


            xhr.onload = () => {
                /*const headers = this._parseHeaders(xhr.getAllResponseHeaders());
                const response = this._transformResponse(xhr.response, headers);
                const gist = this._isSuccessCode(xhr.status) ? 'Success' : 'Error';
                const method = '_on' + gist + 'Item';
                for (const item of this.queue) {
                    this[method](item, response, xhr.status, headers);
                }
                if (this.queue.length > 0) {
                    this._onCompleteItem(this.queue[0], response, xhr.status, headers);
                }*
                
                if ( xhr.status >= 200 && xhr.status < 300) {
                    resolve(xhr.response);
                } else {
                    console.log('rejecting');
                    reject(xhr.statusText);
                }

            };
            console.log('oi');
            console.log(sendable);
            xhr.getAllResponseHeaders();
            xhr.send(sendable);
        });*/
    }

}
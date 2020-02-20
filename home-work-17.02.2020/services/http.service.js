export class HttpService {
    async fetch() {
        return new Promise((resolve, reject) => {
            fetch('https://api.ipify.org?format=json')
                .then(response => response.json())
                .then(data => {
                    resolve(data);
                })
                .catch(error => {
                    reject(error);
                })
        })
    }
}
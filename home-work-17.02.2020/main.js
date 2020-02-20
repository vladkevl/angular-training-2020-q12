import {HttpService} from './services/index.js';

const ipDiv = document.querySelector('div.ip-div');

const getIp = new HttpService();
getIp.fetch()
    .then((ip) => {
        const d = document.createElement('div');
        d.innerHTML = ip.ip;
        ipDiv.appendChild(d);
    });
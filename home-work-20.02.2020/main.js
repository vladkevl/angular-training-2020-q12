import axios from 'axios';

axios.get('https://api.ipify.org?format=json').then((response) => {
    const divElement = document.querySelector('div.ip-div');
    const d = document.createElement('div');
    d.innerHTML = response.data.ip;
    divElement.appendChild(d);
});
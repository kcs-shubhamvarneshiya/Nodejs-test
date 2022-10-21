console.log('starting...');

setTimeout(() => {
    console.log('waiting state for 2 min');
}, 2000);

setTimeout(() => {
    console.log('waiting state for 0 min');
}, 0);

setInterval(() => {
    const axios = require('axios');
    const params = {
        access_key: '5bd90457ca56db496b7956d15cefd7a6',
        query: 'morbi'
    }

    axios.get('http://api.weatherstack.com/current', { params })
        .then(response => {
            const apiResponse = response.data;
            console.log(`Current temperature in ${apiResponse}`);
        }).catch(error => {
            console.log(error);
        });
}, 2000);

console.log('ending');
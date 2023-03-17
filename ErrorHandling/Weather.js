const request = require('request');
require('colors');

const parameters = {
    access_key: 'c592cc3c9c5cb7e8cb953ebb6d85168f',
    query: 'Morbi'
}

request(`http://api.weatherstack.com/current?access_key=${parameters.access_key}&query=${parameters.query}`, { json: true }, (error, response) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log(response.body);
    }
})

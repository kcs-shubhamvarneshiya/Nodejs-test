const request = require('request');

const location = 'Ahmedabad'
const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=pk.joic2h1YmhhbXY0NTI0IiwiYSI6ImNsOXpmY2cwcTAwMHUzdXBlY3ppbHd6cXMifQ.PMiIpq8nNL741csoDX4oKg&limit=1`


request({ uri: url, json: true }, function (error, response) {
    if (error) {
        console.log('Unable to connect !!')
        console.log(error.message);
    }
    else
    {
        const place = response.body.features[0].place_name;
        const lattitude = response.body.features[0].center[0];
        const longitude = response.body.features[0].center[1]
        
        console.log(`place is : `+place);
        console.log(`latitude is : `+lattitude);
        console.log(`Logitude is : `+longitude);
    }
})
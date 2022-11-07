const request = require("request");
require('colors');

const Getlocation = (address, data) => {
    const parameter = address;
    
    const param = data
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${parameter}.json?access_token=pk.eyJ1Ijoic2h1YmhhbXY0NTI0IiwiYSI6ImNsOXpmY2cwcTAwMHUzdXBlY3ppbHd6cXMifQ.PMiIpq8nNL741csoDX4oKg&limit=1`

    request({ uri: url, json: true }, (error, response) => {
        if (error) {

            if (error.code == 'ENOTFOUND') {
                param((error, { errorMsg: 'Internet_Connection' }))
            }
            else {
                param(error.message)
            }
        }
        else {

            const res = response.body;

            if (res.message == 'Not Authorized - Invalid Token') {
                data((error, { errorMsg: 'Invalid_Token' }))
            }
            else if (res.features[0] == null) {
                data((error, { errorMsg: 'Empty_Fields' }))
            }
            else {
                const details = {
                    place: res.features[0].place_name,
                    lattitude: res.features[0].center[0],
                    longitude: res.features[0].center[1]
                }
                param(null, details)
            }

        }
    })

}

module.exports = Getlocation;
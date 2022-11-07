const axios = require('axios')

/**
 * 
 * @param {*} long parameter Longitude
 * @param {*} lat  parameter latitude
 * @param {*} result pass the response (error,response payload)
 */
const forcast = (long, lat, result) => {

    const parameters = {
        method: 'GET',
        url: 'https://weatherbit-v1-mashape.p.rapidapi.com/current',
        params:
        {
            lon: long,
            lat: lat
        },
        headers: {
            'X-RapidAPI-Key': 'a90750215d5cp1e104ejsna8455c0b2a7d',
            'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
        }
    }

    axios.request(parameters).then((response) => {
        result(null, response.data)
    }).catch((error) => {

        //If there is a problem with internet connection
        if (error.code == 'ENOTFOUND') {
            result((error, { errorMsg: 'Internet_connection' }))
        }
        //If user enter Invalid AccessKey
        else if (error.code == 'ERR_BAD_REQUEST' && error.response.status == 400) {
            result((error, { errorMsg: 'Invalid_Host' }))
        }
        //If user enter Invalid Accesskey
        else if (error.code == 'ERR_BAD_REQUEST' && error.response.status == 403) {
            result((error, { errorMsg: 'Invalid_Key' }))
        }
        //If any other error would be occure that will be handle here..
        else {
            result(error)
        }
    })

}

//Export the module
module.exports = forcast;



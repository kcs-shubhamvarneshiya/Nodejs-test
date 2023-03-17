const axios = require('axios')
require('colors')

/**
 * 
 * @param {*} long parameter Longitude
 * @param {*} lat  parameter latitude
 * @param {*} result pass the response (error,response payload)
 */
const forcast = (long, lat, result) => {


    const parameters = {
        method: 'GET',
        url: 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/daily',
        params:
        {
            lat: lat,
            lon: long
        },
        headers: {
            'X-RapidAPI-Key': '39ee93099amsh90a94bf48362163p15e903jsnc3338d887776',
            'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
        }
    }

    axios.request(parameters).then((response) => {
        result(null, response.data)
    }).catch((error) => {

        //If there is a problem with internet connection
        if (error.code == 'ENOTFOUND') {
            result((error, { errorMsg: 'Could not reach , Please check your internet connection '.red.bold }), null)
        }
        //If user enter Invalid AccessKey
        else if (error.code == 'ERR_BAD_REQUEST' && error.response.status == 400) {
            result((error, { errorMsg: 'Invalid Host name , Please check !!'.red.bold }), null)
        }
        //If user enter Invalid Accesskey
        else if (error.code == 'ERR_BAD_REQUEST' && error.response.status == 403) {
            result((error, { errorMsg: 'Invalid Access key , Please check !!'.red.bold }), null)
        }
        //If Montly subscription is expired 
        else if (error.code == 'ERR_BAD_REQUEST' && error.response.status == 429) {
            result((error, { errorMsg: 'Your Free Api usege is end , Please upgrade your plan !!'.red.bold }))
        }
        //If any other error would be occure that will be handle here..
        else {
            result(error.message)
        }
    })

}

//Export the module
module.exports = forcast;



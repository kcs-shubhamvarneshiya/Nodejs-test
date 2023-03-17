const axios = require('axios')


class Cricket {
    static getPlayerData(result) {

        const parameters = {
            method: 'GET',
            url: 'https://cricbuzz-cricket.p.rapidapi.com/teams/v1/international',
            headers: {
                'X-RapidAPI-Key': 'b13f669373msh837a90750215d5cp1e104ejsna8455c0b2a7d',
                'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
            }
        }

        axios.request(parameters).then((response) => {
            result(null, response.data)
        }).catch((error) => {

            //console.log(error)
            if (error.code == 'ENOTFOUND') {
                result((error, { errorMsg: 'Connection_fail' }))
            }
            else if (error.code == 'ETIMEDOUT') {
                result((error, { errorMsg: 'Connection_timeout' }))
            }
            else if (error.code == 'ERR_BAD_REQUEST' && error.response.status == 400) {
                result((error, { errorMsg: 'Invalid_host' }))
            }
            else if (error.code == 'ERR_BAD_REQUEST' && error.response.status == 403) {
                result((error, { errorMsg: 'Invalid_AccessKey' }))
            }
            else {
                result(error);
            }
        })
    }
}

module.exports = Cricket;



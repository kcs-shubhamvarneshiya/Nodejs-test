const geocode = require('../util/geocode');
const forcast = require('../util/Forecast');
require('colors');

const address = process.argv[2];
if (!address) {

    console.log('Please Enter city name as an argument ! '.red.bold)
}
else {

    geocode(address, (err, resp) => {
        if (err) {
            console.log(err.errorMsg)
        }
        else {
            forcast(resp.lattitude, resp.longitude, (error, res) => {
                if (error) {
                    console.log(error.errorMsg)
                }
                else {
                    //const place =  resp.place_name;
                    //Wind_Speed : res.data[0].wind_spd
                    //Date : res.data[0].valid_date
                    //Description : res.data[0].weather.description

                    //const data = [resp.place_name, res.data[0].wind_spd, res.data[0].valid_date, res.data[0].weather.description]

                    //const [, ...forcastData] = data; //Rest
                    // console.log('Forcast Data : ' + forcastData)


                    //const forcastData = res.data[0];
                    const { weather: { description }, valid_date, wind_spd, temp } = res.data[0]; // with nested object

                    console.log('Weather condition on '.yellow.bold + valid_date +
                        ' is '.yellow.bold + description + ' And Temprature is '.yellow.bold +
                        temp + ' And wind speed is '.yellow.bold + wind_spd + ' Km/h'.yellow.bold)

                }
            })
        }
    })
}


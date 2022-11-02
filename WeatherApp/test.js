// const axios = require('axios');
require('colors');

// const params = {
//     access_key: '5bd90457ca56db496b7956d15cefd7a6',
//     query: 'Ahmedabad'
// }

// setInterval(() => {
//     axios.get('http://api.weatherstack.com/current', { params })
//         .then(response => {
//             const apiResponse = response.data;
//             console.log(`Current temperature in 
//                         ${apiResponse.location.name} ${apiResponse.location.region} 
//                         is 
//                         ${apiResponse.current.temperature}℃  
//                         ${apiResponse.current.weather_descriptions[0]}
//                         at ${apiResponse.current.observation_time}`.yellow.bold);
//         }).catch(error => {
//             console.log(error.message.red.bold);
//         });
// }, 5000);

// function myfuncOne()
// {
//     console.log('function One Called !!');
//     myfuncTwo();
//     return
// }

// function myfuncTwo()
// {

//     setTimeout(()=>{
//         console.log('function Two Called !');
//         //myfuncOne();
//     },5000);
//     console.log('Again Function Two called!')
//     return
// }

// myfuncOne();

//===================================================
const request = require('request');

// const parameters = {
//     method: 'GET',
//     url: 'https://open-weather13.p.rapidapi.com/city/Ahmedabad',
//     headers: {
//         'X-RapidAPI-Key': 'b13f669373msh837a90750215d5cp1e104ejsna8455c0b2a7d',
//         'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
//     }
// };
const access_key = 'c592cc3c9c5cb7e8cb953ebb6d85168f'
const location = 'morbi'

const url = `http://api.weatherstack.com/current?access_key=${access_key}&query=${location}`;

request({ uri: url, json: true }, function (error, response) {
    if (error) {
        console.log(error.message);
    }
    else {
        var msg;
        var Api = response.body;

        switch (Api.current.weather_code) {
            case 101:
                msg = 'look at this , clean sky !'.blue
                break;
            case 104:
                msg = 'See cloudy weather , it seems like rain will come'.blue
                break;
            case 105:
                msg = 'its Rainy day, i need to order Rain coat'.blue
                break;
            case 107:
                msg = 'Look at here , its snowfoll how beautifull it is !!!'.blue
                break;
            case 113:
                msg = 'its freezing rain , i need to order sweater'.blue
                break;
            case 114:
                msg = 'its Thunderstrom !! , please stay at home'.red
                break;
            default:
                msg = 'sorry i dont have proper message for this weather code'.red
                break;
        }
        console.log('Hy bro !, Currently temperature at '.yellow
            + Api.location.name + ' is '.yellow + Api.current.temperature +
            ' C ' + msg);


    }
});
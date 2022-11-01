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

const parameters = {
    access_key : '5bd90457ca56db496b7956d15cefd7a6',
    query : 'Ahmedabad'
}

const url = `http://api.weatherstack.com/current?access_key=5bd90457ca56db496b7956d15cefd7a6&query=Ahmedabad`;
request({ uri: url, json: true }, function (error, response) {
    if (error) {
        console.log(error.message);
    }
    else {
        console.log(response.body);
    }
});
// const axios = require('axios');
// require('colors');

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

function myfuncOne()
{
    console.log('function One Called !!');
    myfuncTwo();
    return
}

function myfuncTwo()
{
   
    setTimeout(()=>{
        console.log('function Two Called !');
        //myfuncOne();
    },5000);
    console.log('Again Function Two called!')
    return
}

myfuncOne();
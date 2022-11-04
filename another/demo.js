// setTimeout(()=>{
//     console.log('Two seconds hold')
// },2000)



// const names = ['Andrew','symonds','shubham']

// const shortName = names.filter((name)=>{
//     return name.length <= 4
// })

// const geocode = (address,callback)=>{
//     setTimeout(()=>{
//         const data ={
//             lattitude : 0,
//             longitude : 0
//         }
//         callback(data)
//     })
// }

// geocode('Ahemdabad',(data)=>{
//     console.log(data)
// })

// const sumFunc = (arg1,argv2,sumofTwo)=>{

//     setTimeout(() => {

//         const sum = arg1+argv2;

//         sumofTwo(sum);

//     }, 2000);

// }

// sumFunc(1,4,(data)=>{

//     console.log('sum is '+data);

// })

// const minFunc = (arg1,arg2,minOfTwo)=>{
//     const minus = arg1-arg2;
//     minOfTwo(minus);
// }

// minFunc(5,6,(result)=>{
//     console.log(result)
// })
const request = require("request");
require('colors');

const Getlocation = (url, data) => {

    const param = data
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
const loc = 'Rajkot'
const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${loc}.json?access_token=pk.eyJ1Ijoic2h1YmhhbXY0NTI0IiwiYSI6ImNsOXpmY2cwcTAwMHUzdXBlY3ppbHd6cXMifQ.PMiIpq8nNL741csoDX4oKg&limit=1`

Getlocation(url, (err, result) => {

    if (err) {
        if (err.errorMsg == 'Internet_Connection') {
            console.log('Could not connect !, Please check your internet connection !'.red.bold)
        }
        else if (err.errorMsg == 'Empty_Fields') {
            console.log('Could not find the place name , please check again !!'.red.bold)
        }
        else if (err.errorMsg == 'Invalid_Token') {
            console.log('Invalid Token Please , check your token first !!'.red.bold)
        }
        else {
            console.log('Somethig went wrong !!'.red.bold);
        }
    }
    else {
        console.log(result)
    }
});
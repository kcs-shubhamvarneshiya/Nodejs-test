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


const geocode = require('../util/geocode')

//const location = 'Rajkot'

geocode('Rajkot', (err, result) => {

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

geocode('Surat', (err, result) => {

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

geocode('Ahmedabad', (err, result) => {

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

geocode('Mumbai', (err, result) => {

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

geocode('Channai', (err, result) => {

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

geocode('Delhi', (err, result) => {

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

geocode('Jammu', (err, result) => {

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

geocode('Panjab', (err, result) => {

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

geocode('Rajsthan', (err, result) => {

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


geocode('Japan', (err, result) => {

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
const forcast = require('../util/Forecast')

/**
 * find the forcast by latitude and longitude 
 * however we can find the forcast data by location (Address) also for that we need to update parameter as per changes
 * 
 * by the API i have handle the 3 Exception
 * 
 * 1. if user enter invalid hostname then it will be throw message  , 'Invalid host name , Please check !'
 * 2. if user enter Invalid AccessKey then it will be throw Message , 'Invalid Access key , Please check !'
 * 3. if There is a problem with internet connection then it will bw throw Message 'Could not Connect , Please check your internet connection !!' 
 * 
 * We can get multiple forcast by calling function multiple as per our need.
 * 
 * As i have pass both value as a parameter 
 * 
 * [ util/Forcast ] is base file  
 */

forcast(38.5, -78.5, (err, data) => {
    if (err) {
        if (err.errorMsg == 'Invalid_Host') {
            console.log('Invalid host name , Please check !');
        }
        else if (err.errorMsg == 'Invalid_Key') {
            console.log('Invalid Access key , Please check !')
        }
        else if (err.errorMsg == 'Internet_connection') {
            console.log('Could not Connect , Please check your internet connection !!')
        }
        else {
            console.log('Something went wrong !!!')
        }
    }
    else {
        console.log(data)
    }
})
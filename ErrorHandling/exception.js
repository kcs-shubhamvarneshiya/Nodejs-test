const cricketApi = require('./Cricket');
require('colors')

cricketApi.getPlayerData((err, rows) => {
    if (err) {

        if (err.errorMsg == 'Invalid_host') {
            console.log('Invalid host name , Please check again !!'.red.bold);
        }
        else if (err.errorMsg == 'Invalid_AccessKey') {
            console.log('Invalid Access Key , Please check again !!'.red.bold);
        }
        else if(err.errorMsg == 'Connection_fail') {
            console.log('Could not connect , Please check your internet connection !!'.red.bold);
        }
        else if(err.errorMsg == 'ETIMEDOUT') {
            console.log('Connection time out , Please check your internet connection !!'.red.bold);
        }
        else {
            console.log('Something went wrong , Please Try again !'.red.bold);
        }
    }
    else {
        console.log(rows)
    }
})





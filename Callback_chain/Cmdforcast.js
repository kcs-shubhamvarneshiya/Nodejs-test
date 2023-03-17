const yargs = require('yargs')
const geocode = require('.././util/geocode')
const forcast = require('.././util/Forecast')
require('colors')

yargs.command({
    command: 'address',
    describe: 'Add Address',
    builder: {
        adr: {
            describe: 'Adress',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        geocode(argv.adr, (error, result) => {
            if (error) {
                console.log(error.message)
            }
            else {
                forcast(result.lattitude, result.longitude, (err, resp) => {
                    if (err) {
                        if (err.errorMsg == 'Invalid_Host') {
                            console.log('Invalid host name , Please check !'.red.bold);
                        }
                        else if (err.errorMsg == 'Invalid_Key') {
                            console.log('Invalid Access key , Please check !'.red.bold)
                        }
                        else if (err.errorMsg == 'Internet_connection') {
                            console.log('Could not Connect , Please check your internet connection !!'.red.bold)
                        }
                        else {

                            console.log('Something went wrong !!!'.red.bold)
                        }
                    }
                    else {
                        const res = {
                            Average_Temprature: resp.data[0].temp,
                            High_Temp: resp.data[0].max_temp,
                            Description: resp.data[0].weather.description,
                            UV_Index: resp.data[0].uv
                        }
                        console.log('Average Temprature is : '.yellow.bold + res.Average_Temprature +
                            "\nDescription is : ".yellow.bold + res.Description +
                            "\nUv Index is : ".yellow.bold + res.UV_Index)
                    }
                })
            }
        })
    }
})

yargs.parse()

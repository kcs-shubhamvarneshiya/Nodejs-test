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
                        const res = {
                            Average_Temprature: resp.data[0].temp,
                            High_Temp: resp.data[0].max_temp,
                            Description: resp.data[0].weather.description,
                            UV_Index: resp.data[0].uv
                        }
                        console.log('Average Temprature is : '.yellow + res.Average_Temprature +
                            "\nDescription is : ".yellow + res.Description +
                            "\nUv Index is : ".yellow + res.UV_Index)
                    }
                })
            }
        })
    }
})

yargs.parse()

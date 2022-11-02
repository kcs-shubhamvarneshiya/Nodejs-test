const ApiRes = require('./CricketApi');

 ApiRes.getCurrentWeather((errormsg, data) => {
    if(errormsg)
    {
        return errormsg;
    }
    else{
        return data;
    }
})




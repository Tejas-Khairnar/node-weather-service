const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/a34b999907e0fabcbc0b673d4ec834a2/' + latitude+ ',' + longitude;

    request({ url, json: true}, (error, { body }) => { //response
        if(error) {
            callback('', undefined);
        } else if(body.error) { //response.body
            callback('', undefined);
        } else {
            callback(undefined, body.daily.data[0].summary + 
                         ' It is currently ' + body.currently.temperature + 
                         ' degress out. The high today is ' + body.daily.data[0].temperatureHigh + 
                         ' with a low of ' + body.daily.data[0].temperatureLow + 
                         '. There is a ' + body.currently.precipProbability + 
                         '% chance of rain.')
        }
    })
}

module.exports = forecast;
const request = require('request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoicHJvZ3JhbW1pbmdndXJ1IiwiYSI6ImNqdXV0bmxlbzBtaGwzenFxdHpkdm95cHcifQ.1UvZC7BX7XM5HQBdWiU_NA&limit=1';

    request({ url: url, json: true}, (error, response) => {
        if(error) {
            callback('Unabled to connect to Geocading Service', undefined);
        } else if(response.body.features.length === 0) {
            callback('Unabled to find location, Please try something else', undefined);
        } else {
            data = {
                location: response.body.features[0].place_name,
                longitude: response.body.features[0].center[0],
                latitude: response.body.features[0].center[1]
            }
            callback(undefined, data);
        }
    })
}

module.exports = geocode;

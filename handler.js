'use strict';

module.exports.elevationAPI = (event, context, callback) => {

    if (event.source === 'serverless-plugin-warmup') {
        console.log('WarmUP - Lambda is warm!')
        return callback(null, 'Lambda is warm!')
    }
    
    var MapboxElevation = require('mapbox-elevation');
    var getElevation = MapboxElevation('<YOUR-MAPBOX-KEY>');

    var lng = event["queryStringParameters"]['lng'];
    var lat = event["queryStringParameters"]['lat'];

    console.log(lng)
    console.log(lat)

    getElevation([lng, lat], function (err, elevation, callback) {
        if (err) throw err;
        context.succeed({
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
            },
            //convert meters to feet
            body: (JSON.parse(JSON.stringify(elevation * 3.28084)))
        });
    });

};

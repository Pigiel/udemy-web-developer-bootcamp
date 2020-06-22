const request = require('request');

request('https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=439d4b804bc8187953eb36d2a8c26a02', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        const parsedData = JSON.parse(body);
        console.log('Sunset in ' + parsedData['name'] + " is at ...");
        // console.log(Date(parsedData['sys']['sunset']));
        const time = new Date(parsedData['sys']['sunset']);
        console.log(`${time.getUTCHours()}:${time.getUTCMinutes()}`);
    }
});
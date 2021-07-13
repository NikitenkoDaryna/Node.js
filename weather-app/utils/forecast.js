const http = require('http')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=9bbf489e8bee1a62e42e809799619fff&query=${latitude},${longitude}&units=f`

    const request = http.request(url, (response) => {
        let buffer = ''
        response.on('data', (chunk) => {
            buffer += chunk
        })
        response.on('end', () => {
            const parsedData = JSON.parse(buffer)
            if (parsedData.error)callback(parsedData.error.info, undefined)
            else {
                const { weather_descriptions, temperature, precip } = parsedData.current
                const weatherForecast = `${weather_descriptions}.It is currently ${temperature} degrees out. There is ${precip}% chance of the rain`
                callback(weatherForecast)
            }
        })
    })
    request.on('error', (error) => {
        callback(`Unable to connect to location services. Error: ${error}`, undefined)
    })
    request.end()
}
module.exports = forecast

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if (!address){
    console.log('Please provide an address')
} else {
    geocode(address, (error, response) => {
        if (response === undefined){
            return console.log(error)
        }
        const { latitude, longitude } = response
        forecast(latitude, longitude, (error, forecastData) => {
            if (error){
                return console.log(error)
            }
            console.log(forecastData)
        })
    })
}

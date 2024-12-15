class WeatherFns {
    static API_KEY = "P8YK4XGR3DLZNHH55G2S5NHUL";
    static async getWeatherData(location) {
        try {
            const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${WeatherFns.API_KEY}&contentType=json`, {mode: 'cors'});
            const weatherData = await response.json();
            return weatherData;
        } catch (error) {
            console.error("Oh no, the fetching failed.")
            console.error(error)
        }
    }
    static async getWeeklyWeather(location) {
        try {
            let weatherobject = await WeatherFns.getWeatherData(location);
            let parsed = {add:weatherobject.resolvedAddress, weekly:weatherobject.days.slice(0,7)}
            console.log(parsed);
            return parsed;
        } catch (error) {
            console.error("Oh no, the processing failed.")
            console.error(error)
        }
    }
}

export { WeatherFns }
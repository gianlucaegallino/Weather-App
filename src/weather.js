class WeatherFns {
    static API_KEY = P8YK4XGR3DLZNHH55G2S5NHUL;
    static async getWeather(location) {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${WeatherFns.API_KEY}&contentType=json`, {mode: 'cors'});
        const weatherData = await response.json();
        console.log(weatherData)
    }
}

export { WeatherFns }
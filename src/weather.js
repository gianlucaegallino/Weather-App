import { ErrorHandler } from "./errorhandler";
class WeatherFns {
  static API_KEY = "P8YK4XGR3DLZNHH55G2S5NHUL";
  static async getWeatherData(location, format) {
    try {
      const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${format}&key=${WeatherFns.API_KEY}&contentType=json`,
        { mode: "cors" }
      );

      if (!response.ok) {
        throw new Error(response.status);
      }

      const weatherobject = await response.json();
      return weatherobject;
    } catch (error) {
      throw error;
    }
  }
  static async getWeeklyWeather(location, format) {
    try {
      let weather = await WeatherFns.getWeatherData(location, format);

      let parsed = {
        add: weather.resolvedAddress,
        weekly: weather.days.slice(0, 7),
      };


      return parsed;
    } catch (error) {
      throw error;
    }
  }
}

export { WeatherFns };

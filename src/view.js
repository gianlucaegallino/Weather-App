import { WeatherFns } from "./weather";
import { ErrorHandler } from "./errorhandler";

class View {
    
  start() {
    this.addListeners();
  }

  addListeners() {
    const searchbar = document.querySelector(".searchBar");
    const searchbtn = document.querySelector(".searchBtn");

    if (searchbar.value != null) {
      //TODO: Add better checking. Abstract to another funct?
      searchbtn.addEventListener("click", () => {
        WeatherFns.getWeeklyWeather();
      });
    } else {
      ErrorHandler.handle("No value in search box :(");
    }
  }
}

export { View };

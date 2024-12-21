import { WeatherFns } from "./weather";
import { ErrorHandler } from "./errorhandler";

//Image imports

import clearday from "./clear-day.svg";
import clearnight from "./clear-night.svg";
import cloudy from "./cloudy.svg";
import fog from "./fog.svg";
import hail from "./hail.svg";
import partlycloudyday from "./partly-cloudy-day.svg";
import partlycloudynight from "./partly-cloudy-night.svg";
import rain from "./rain.svg";
import rainsnowshowersday from "./rain-snow-showers-day.svg";
import rainsnowshowersnight from "./rain-snow-showers-night.svg";
import showersday from "./showers-day.svg";
import showersnight from "./showers-night.svg";
import sleet from "./sleet.svg";
import snow from "./snow.svg"
import snowshowersday from "./snow-showers-day.svg";
import snowshowersnight from "./snow-showers-night.svg";
import thunder from "./thunder.svg";
import thunderrain from "./thunder-rain.svg";
import thundershowersday from "./thunder-showers-day.svg";
import thundershowersnight from "./thunder-showers-night.svg";
import wind from "./wind.svg";

//image mapping
const icons = {
  'clearday': clearday,
  'clearnight': clearnight,
  'cloudy': cloudy,
  'fog': fog,
  'hail': hail,
  'partlycloudyday': partlycloudyday,
  'partlycloudynight': partlycloudynight,
  'rain': rain,
  'rainsnowshowersday': rainsnowshowersday,
  'rainsnowshowersnight': rainsnowshowersnight,
  'showersday': showersday,
  'showersnight': showersnight,
  'sleet': sleet,
  'snow': snow,
  'snowshowersday': snowshowersday,
  'snowshowersnight': snowshowersnight,
  'thunder': thunder,
  'thunderrain': thunderrain,
  'thundershowersday': thundershowersday,
  'thundershowersnight': thundershowersnight,
  'wind': wind
};



class View {

  static start() {
    this.addListeners();
  }

  static addListeners() {
    const searchbar = document.querySelector(".searchBar");
    const searchbtn = document.querySelector(".searchBtn");
    const type = document.querySelector("#type");

    searchbtn.addEventListener("click", () => {
      View.handleSearch(searchbar, type);
    });

  }

  static loadWeather(weather, type){

    // creates constant elements
     const weatherdiv = document.querySelector(".weatherdisplay")
     weatherdiv.innerHTML = "";

     const header  = document.createElement("h1");
     header.textContent = weather.add;
     weatherdiv.appendChild(header);

     const days  = document.createElement("div");
     days.setAttribute("class", "daycontainer")
     weatherdiv.appendChild(days);
    
      // selects corresponding temperature format
      let tempstring =  (type == "metric")?"°C":"°F";

      // creates and appends each day card

     for (let i = 0; i<7; i++){
        let daydiv = document.createElement("div");
        let img = document.createElement("img");
        let temp = document.createElement("h2");
        let desc = document. createElement("h3");
        let day = document. createElement("h4");


        let source = weather.weekly[i].icon.split('-').join('');

        // Set Attributes
        daydiv.setAttribute("class", "daybox")
        img.setAttribute("src", icons[source]);
        img.setAttribute("alt", source);
        desc.textContent = weather.weekly[i].conditions;
        temp.textContent = weather.weekly[i].temp+tempstring;
        day.textContent = weather.weekly[i].datetime;

        // Set children
        daydiv.appendChild(day);
        daydiv.appendChild(img);
        daydiv.appendChild(temp);
        daydiv.appendChild(desc);

        days.appendChild(daydiv);
     }
  }

  static async handleSearch(searchbar, type){
    const text = searchbar.value;
    const format = type.value;


    if (text != null && text != "") {
      View.showloading();
      try {
        let wtr = await WeatherFns.getWeeklyWeather(text, format);
        View.loadWeather(wtr, format);
      } catch (error) {
        ErrorHandler.handle(error);
      }
      View.hideloading();

        
      //TODO: Add better checking. Abstract to another funct?

    } else {
      ErrorHandler.handle("No value in search box :(");
    }
  }

  static showloading(){
    let loading = document.querySelector(".loadingdisplay");
  loading.classList.add("show");
  }

  static hideloading(){
    let loading = document.querySelector(".loadingdisplay");
    loading.classList.remove("show");
  }
}

export { View };

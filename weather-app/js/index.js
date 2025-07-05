import { WeatherUI } from "./src/WeatherUI.js";

window.addEventListener("DOMContentLoaded", () => {
  const weatherForm = document.querySelector(".weather-form");

  weatherForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const cityInput = document.querySelector(".city-name-input");
    const cityName = cityInput.value;

    const weatherUI = new WeatherUI(cityName);
    weatherUI.displayWeather();
  });
});

import { WeatherData } from "./WeatherData.js";

const weatherIcons = new Map([
  ["rain", "../js/images/rain.png"],
  ["clouds", "../js/images/clouds.png"],
  ["snow", "../js/images/snow.png"],
  ["mist", "../js/images/mist.png"],
  ["clear", "../js/images/clear.png"],
  ["drizzle", "../js/images/drizzle.png"],
  ["haze", "../js/images/haze.png"],
  ["wind", "../js/images/wind.png"],
  ["humidity", "../js/images/humidity.png"],
]);

export class WeatherUI extends WeatherData {
  constructor(city) {
    super(city);
  }

  async displayWeather() {
    try {
      const weather = await this.getWeather();
      this.#renderWeatherDetails(weather);
    } catch (error) {
      console.error("Error displaying weather:", error);
    }
  }

  #renderWeatherDetails(weather) {
    const weatherContainer = document.querySelector(".weather-result");
    const weatherIcon = this.#renderWeatherIcon(weather.weather);
    const weatherTemperature = this.#renderWeatherTemperature(
      weather.temperature
    );
    const cityName = this.#renderCityName(weather.city);
    const weatherDetails = this.#renderWeatherDetailsContainer(
      weather.wind,
      weather.humidity
    );
    weatherContainer.appendChild(weatherIcon);
    weatherContainer.appendChild(weatherTemperature);
    weatherContainer.appendChild(cityName);
    weatherContainer.appendChild(weatherDetails);
  }

  #renderWeatherDetailsContainer(wind, humidity) {
    const detailsContainer = document.createElement("div");
    detailsContainer.classList.add("weather-details");
    detailsContainer.appendChild(this.#renderWindDetails(wind));
    detailsContainer.appendChild(this.#renderHumidityDetails(humidity));
    return detailsContainer;
  }

  #renderWindIcon() {
    const windIcon = document.createElement("img");
    windIcon.src = weatherIcons.get("wind");
    windIcon.alt = "Wind Icon";
    windIcon.classList.add("wind-icon");
    return windIcon;
  }

  #renderWindSpeed(wind) {
    const container = document.createElement("div");
    container.classList.add("wind-speed-container");
    const windSpeedElement = document.createElement("div");
    const windTitleElement = document.createElement("h3");
    windTitleElement.textContent = "Wind Speed";
    windSpeedElement.textContent = `${wind} m/s`;
    windSpeedElement.classList.add("wind-speed");
    container.appendChild(windTitleElement);
    container.appendChild(windSpeedElement);
    return container;
  }

  #renderWindDetails(wind) {
    const windElement = document.createElement("div");
    windElement.classList.add("wind-details");
    windElement.appendChild(this.#renderWindIcon());
    windElement.appendChild(this.#renderWindSpeed(wind));
    return windElement;
  }

  #renderHumidityDetails(humidity) {
    const humidityElement = document.createElement("div");
    humidityElement.classList.add("humidity-details");
    humidityElement.appendChild(this.#renderHumidityIcon());
    humidityElement.appendChild(this.#renderHumidityValue(humidity));
    return humidityElement;
  }

  #renderHumidityIcon() {
    const humidityIcon = document.createElement("img");
    humidityIcon.src = weatherIcons.get("humidity");
    humidityIcon.alt = "Humidity Icon";
    humidityIcon.classList.add("humidity-icon");
    return humidityIcon;
  }

  #renderHumidityValue(humidity) {
    const container = document.createElement("div");
    container.classList.add("humidity-container");
    const humidityValueElement = document.createElement("div");
    const humidityTitleElement = document.createElement("h3");
    humidityTitleElement.textContent = "Humidity";
    humidityValueElement.textContent = `${humidity}%`;
    humidityValueElement.classList.add("humidity-value");
    container.appendChild(humidityTitleElement);
    container.appendChild(humidityValueElement);
    return container;
  }

  #renderCityName(city) {
    const cityElement = document.createElement("h3");
    cityElement.textContent = city;
    cityElement.classList.add("city-name");
    return cityElement;
  }

  #renderWeatherTemperature(temperature) {
    const temperatureElement = document.createElement("h2");
    temperatureElement.textContent = `${temperature}°C`;
    temperatureElement.classList.add("weather-temperature");
    return temperatureElement;
  }

  #renderWeatherIcon(weatherCondition) {
    const iconURL =
      weatherIcons.get(weatherCondition.toLowerCase()) ||
      weatherIcons.get("clear");
    const iconElement = document.createElement("img");
    iconElement.src = iconURL;
    iconElement.alt = weatherCondition.description;
    iconElement.classList.add("weather-icon");
    return iconElement;
  }
}

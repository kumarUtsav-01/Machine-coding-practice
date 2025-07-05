const DOMAIN = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "46d47581a51a79782741111953e700af";

export class WeatherData {
  constructor(city) {
    this.city = city;
  }

  async #fetchWeather() {
    const URLSreachParams = new URLSearchParams({
      q: this.city,
      appid: API_KEY,
      units: "metric",
    });
    const response = await fetch(`${DOMAIN}?${URLSreachParams}`);
    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }
    const data = await response.json();
    return data;
  }

  async getWeather() {
    try {
      const data = await this.#fetchWeather();
      return {
        city: data.name,
        temperature: Math.round(data.main.temp),
        weather: data.weather[0].main,
        description: data.weather[0].description,
        wind: data.wind.speed,
        humidity: data.main.humidity,
      };
    } catch (error) {
      console.error("Error fetching weather data:", error);
      throw error;
    }
  }
}

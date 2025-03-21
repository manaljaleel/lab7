import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const API_KEY = "6b54fd037eff1e25dc501380b0902616"; // 
  const CITY = "Halifax"; 

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=metric&appid=${API_KEY}`
        );
        setWeather(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching weather:", error);
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="weather-box mt-4 text-center">
      <h4>Current Weather in {CITY}</h4>
      {loading ? (
        <p>Loading weather...</p>
      ) : weather ? (
        <div>
          <p>
            🌡️ {weather.main.temp}°C | {weather.weather[0].description}
          </p>
          <p>💨 Wind: {weather.wind.speed} m/s</p>
          <p>🌧 Humidity: {weather.main.humidity}%</p>
        </div>
      ) : (
        <p>Failed to load weather data.</p>
      )}
    </div>
  );
};

export default Weather;

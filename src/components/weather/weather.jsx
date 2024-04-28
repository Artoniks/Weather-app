import React from "react";

const Weather = ({ data }) => {
  if (!data || !data.main || !data.weather) return null;

  const { main, weather } = data;
  const temp = Ktoc(main.temp);

  return (
    <div className="weather">
      <h2>
        <img
          src={`https://openweathermap.org/img/wn/${weather[0].icon}.png`}
          alt="weather-icon"
        />
        {temp}°C
        <img
          src={`https://openweathermap.org/img/wn/${weather[0].icon}.png`}
          alt="weather-icon"
        />
      </h2>
      <small>{weather[0].main}</small>
    </div>
  );
};

function Ktoc(K) {
  return Math.floor(K - 273.15);
}

export default Weather;

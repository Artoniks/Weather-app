// import "./App.css";
// import Search from "../app-search/app-search";

// function App() {
//   return (
//     <div className="App">
//       <Search />
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import "./App.css";
import Search from "../app-search/app-search";
import Weather from "../weather/weather";

const apiKey = "9527440d3071afe8805fc22ddc2822e4";

function App() {
  const [weatherData, setWeatherData] = useState(null);

  async function getWeatherByLocation(city) {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
      const resp = await fetch(url);
      const respData = await resp.json();
      setWeatherData(respData);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  }

  return (
    <div className="App">
      <Search onSearch={getWeatherByLocation} />
      <Weather data={weatherData} />
    </div>
  );
}

export default App;

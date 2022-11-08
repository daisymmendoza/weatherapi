import React, { useState, useEffect} from 'react';

function App() {
  return (
    <div className="App">
      <LoadWeather></LoadWeather>
    </div>
  );
}

function LoadWeather() {
  const [currentWeather, setCurrentWeather] = useState({});
  
  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=tolleson&units=imperial&appid=a117932c0e837c0755546948f3765fad`;
    fetch(url)
    .then ((resp) => resp.json())
    .then ((data) => setCurrentWeather(data))
  }, []);
  return (
    <div className="weather">
      <p>{currentWeather.name}</p>
      <p>Weather: {currentWeather.weather.main}</p>
      <p>Temperature: {currentWeather.main.temp}</p>
    </div>
  );
}

export default App;

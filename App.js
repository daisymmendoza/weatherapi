import React, {useState, useEffect} from 'react';

function App() {
  return (
    <div className="App">
      <LoadWeather></LoadWeather>
    </div>
  );
}

function LoadWeather() {
  const [currentWeather, setCurrentWeather] = useState({});
  const [getWeather, setGetWeather] = useState('');
  const [search, setSearch] = useState('');
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=imperial&appid=a117932c0e837c0755546948f3765fad`;

  useEffect(() => {
    fetch(url)
    .then ((resp) => resp.json())
    .then ((data) => setCurrentWeather(data))
  }, [url]);
  
  const submitHandler = () => {
    setSearch(getWeather);
  };

  return (
    <div className="weatherSection">
      <div className="">
        <label>City: </label>
        <input
          type="text"
          onChange={(event) => setGetWeather(event.target.value)}
          value={getWeather}
        />
        <button onClick={submitHandler}>Search</button>
      </div>
      <div className="weather">
        {currentWeather.main ? (
          <div className="weatherResults">
            <p id="city">{currentWeather.name}</p>
            <p>{currentWeather.weather[0].main}</p>
            <img
              src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}.png`}
              alt="weather icon"
              className="weatherIcon"
            />
            <p id="temp">{currentWeather.main.temp}&deg;F</p>
            <p>H: {currentWeather.main.temp_max}&deg;F L: {currentWeather.main.temp_min}&deg;F</p>
          </div>
        ) : (
            <h3>Search a city's weather!</h3>
        )}
      </div>
    </div>
  );
}

export default App;

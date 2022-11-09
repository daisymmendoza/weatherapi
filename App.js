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
  const [state, setState] = useState('');
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${state}&units=imperial&appid=a117932c0e837c0755546948f3765fad`;

  useEffect(() => {
    fetch(url)
    .then ((resp) => resp.json())
    .then ((data) => setCurrentWeather(data))
  }, [url]);

  const inputHandler = (event) => {
    setGetWeather(event.target.value);
  };
  
  const submitHandler = () => {
    setState(getWeather);
  };

  return (
    <div>
      <div>
        <label>Enter Location: </label>
        <input
          type="text"
          onChange={inputHandler}
          value={getWeather}
        />
        <button onClick={submitHandler}>Search</button>
      </div>
      <div className="weather">
        {currentWeather.main ? (
          <div>
            <p>{currentWeather.name}</p>
            {/* <img alt='clouds'>{currentWeather.weather[0].icon}</img> */}
            <p>{currentWeather.main.temp}&deg;F</p>
            <p>{currentWeather.weather[0].main}- {currentWeather.weather[0].description}</p>
          </div>
        ) : (
            <h2>Search a city's weather!</h2>
        )}
      </div>
    </div>
  );
}

export default App;

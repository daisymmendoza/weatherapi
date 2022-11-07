import React, { useState, useEffect} from 'react';

function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
    </div>
  );
}

function LoadCountries() {
  const [countries, setCountries] = useState([]);
  const url = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=a117932c0e837c0755546948f3765fad";
  
  useEffect(() => {
    fetch(url)
    .then ((resp) => resp.json())
    .then ((data) => setCountries(data))
  }, []);
  return (
    <div className="countries">
      <h3>Total Number of Countries: {countries.length}</h3>
      {countries.map((country) => (
        <Country country={country}></Country>
      ))}
    </div>
  );
}

function Country(props) {
  const {weather, main} = props.country;
  return (
    <div className="country">
      <p>Country: {weather.main}</p>
      <p>State: {main.temp}</p>
    </div>
  );
}

export default App;
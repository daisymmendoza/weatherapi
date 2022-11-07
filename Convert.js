// import React, { useState, useEffect} from 'react';

// function App() {
//   return (
//     <div className="App">
//       <LoadCountries></LoadCountries>
//     </div>
//   );
// }

// function LoadCountries() {
//   const [countries, setCountries] = useState([]);
//   const url = "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=a117932c0e837c0755546948f3765fad";
  
//   useEffect(() => {
//     fetch(url)
//     .then ((resp) => resp.json())
//     .then ((data) => setCountries(data))
//   }, []);
//   return (
//     <div className="countries">
//       <h3>Total Number of Countries: {countries.length}</h3>
//       {countries.map((country) => (
//         <Country country={country}></Country>
//       ))}
//     </div>
//   );
// }

// function Country(props) {
//   const {name, country, state, lat, lon} = props.country;
//   return (
//     <div className="country">
//       <h2>{name}</h2>
//       <p>Country: {country}</p>
//       <p>State: {state}</p>
//       <p>Latitude: {lat}</p>
//       <p>Longitude: {lon}</p>
//     </div>
//   );
// }

// export default App;
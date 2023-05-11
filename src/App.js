import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import { Routes, Route } from 'react-router-dom';
// import countriesData from './countries.json';
import CountryDetails from './components/CountryDetails';
import { useEffect, useState } from 'react';
import axios from 'axios';
function App() {
  console.log('RENDERING APP.JS');
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((foundCountries) => {
        setCountries(foundCountries.data);
      });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <Routes>
            <Route path="/" element={<CountriesList countries={countries} />} />
            <Route
              path="/:alpha3Code"
              element={
                <>
                  <CountriesList countries={countries} />
                  <CountryDetails countries={countries} />
                </>
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

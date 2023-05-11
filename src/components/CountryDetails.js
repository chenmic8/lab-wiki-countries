import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
const CountryDetails = ({ countries }) => {
  console.log('RENDERING COUNTRY DETAILS');
  const [country, setCountry] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { alpha3Code } = useParams();
  const findCountryName = (code) => {
    return countries.find((country) => country.alpha3Code === code);
  };
  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`)
      .then((foundCountry) => {
        setCountry(foundCountry.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [alpha3Code]);

  return (
    <>


      {!isLoading ? (
        <div className="col-7">
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
            alt={country.name.common + ' flag'}
          />
          <h1>{country.name.common}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td className="style2">Capital</td>
                <td>{country.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {country.area} km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul className="list-inline">
                    {country.borders.map((border) => {
                      return (
                        <li>
                          {countries.length && (
                            <Link
                              className="list-group-item list-group-item-action"
                              to={'/' + border}
                            >
                              {findCountryName(border).name.common}
                            </Link>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default CountryDetails;

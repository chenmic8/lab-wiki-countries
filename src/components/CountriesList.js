import { Link } from 'react-router-dom';

const CountriesList = ({ countries }) => {
  return (
    <div className="col-5 style1">
      <div className="list-group">
        {countries.map((country) => {
          return (
            <Link
              className="list-group-item list-group-item-action"
              to={'/' + country.alpha3Code}
            >
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt={country.name.common + ' flag'}
              />
              <p>{country.name.common}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CountriesList;

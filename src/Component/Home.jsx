import React, { useState, useRef, useEffect, useContext } from 'react';
import { fetchCountryByCurrency, fetchCountryCodes } from '../api';
import { CountryContext } from '../Context/ContextProvider';
import CountryCard from './CountryCard';
import SearchHistory from './SearchHistory';
import debounce from 'lodash.debounce';

const Home = () => {
  const [currencyCode, setCurrencyCode] = useState('');
  const [countries, setCountries] = useState([]);
  const [sorted, setSorted] = useState(false);
  const [countryCodes, setCountryCodes] = useState({});
  const searchInputRef = useRef(null);
  const { addSearchHistory } = useContext(CountryContext);

  useEffect(() => {
    searchInputRef.current.focus();
    const fetchCodes = async () => {
      const codes = await fetchCountryCodes();
      setCountryCodes(codes);
    };
    fetchCodes();
  }, []);

  const fetchCountries = debounce(async (code) => {
    if (code) {
      const data = await fetchCountryByCurrency(code);
      setCountries(data);
      addSearchHistory(code);
    }
  }, 300);

  const handleSearch = (e) => {
    setCurrencyCode(e.target.value);
    fetchCountries(e.target.value);
  };

  const sortCountries = () => {
    const sortedCountries = [...countries].sort((a, b) => {
      if (sorted) {
        return a.name.common.localeCompare(b.name.common);
      }
      return b.name.common.localeCompare(a.name.common);
    });
    setCountries(sortedCountries);
    setSorted(!sorted);
  };

  return (
    <div>
      <h1>Country Information</h1>
      <input
        type="text"
        ref={searchInputRef}
        value={currencyCode}
        onChange={handleSearch}
        placeholder="Enter currency code"
      />
      <button onClick={sortCountries}>
        Sort {sorted ? 'Descending' : 'Ascending'}
      </button>
      <div>
        {countries.map(country => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
      <SearchHistory />
      <div>
        <h2>Available Currency Codes</h2>
        <ul>
          {Object.entries(countryCodes).map(([code, country]) => (
            <li key={code}>
              {code}: {country}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;

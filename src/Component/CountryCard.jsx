import React, { useContext } from 'react';
import { CountryContext } from '../Context/ContextProvider';

const CountryCard = ({ country }) => {
  const { favorites, addFavorite, removeFavorite } = useContext(CountryContext);
  const isFavorite = favorites.some(fav => fav.name.common === country.name.common);

  const handleFavorite = () => {
    if (isFavorite) {
      removeFavorite(country);
    } else {
      addFavorite(country);
    }
  };

  return (
    <div className={`country-card ${isFavorite ? 'favorite' : ''}`}>
      <h2>{country.name.common}</h2>
      <p>Currency: {Object.keys(country.currencies).join(', ')}</p>
      <p>Capital: {country.capital}</p>
      <p>Languages: {Object.values(country.languages).join(', ')}</p>
      <img src={`https://flagsapi.com/${country.cca2}/shiny/64.png`} alt={`${country.name.common} flag`} />
      <button onClick={handleFavorite}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default CountryCard;

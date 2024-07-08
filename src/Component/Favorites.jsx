// src/components/Favorites.jsx
import React, { useContext } from 'react';
import { CountryContext } from '../Context/ContextProvider';
import CountryCard from './CountryCard';

const Favorites = () => {
  const { favorites } = useContext(CountryContext);

  return (
    <div>
      <h1>Favorites</h1>
      <div>
        {favorites.map(country => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;

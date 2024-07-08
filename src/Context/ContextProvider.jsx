// src/context/ContextProvider.js
import React, { createContext, useState } from 'react';

const CountryContext = createContext();

const ContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);

  const addFavorite = (country) => {
    setFavorites([...favorites, country]);
  };

  const removeFavorite = (country) => {
    setFavorites(favorites.filter(fav => fav.name.common !== country.name.common));
  };

  const addSearchHistory = (currencyCode) => {
    setSearchHistory((prevHistory) => {
      const updatedHistory = [...new Set([currencyCode, ...prevHistory])];
      return updatedHistory.slice(0, 5);
    });
  };

  return (
    <CountryContext.Provider value={{ favorites, addFavorite, removeFavorite, searchHistory, addSearchHistory }}>
      {children}
    </CountryContext.Provider>
  );
};

export { CountryContext, ContextProvider };

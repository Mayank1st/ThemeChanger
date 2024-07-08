import React, { useContext } from 'react';
import { CountryContext } from '../Context/ContextProvider';

const SearchHistory = () => {
  const { searchHistory } = useContext(CountryContext);

  if (searchHistory.length === 0) {
    return <p>No search history available. Start searching for countries by currency code.</p>;
  }

  return (
    <div>
      <h2>Search History</h2>
      <ul>
        {searchHistory.map((code, index) => (
          <li key={index}>{code}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchHistory;

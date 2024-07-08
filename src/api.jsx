// src/api.js
import axios from 'axios';

const BASE_URL = 'https://restcountries.com/v3.1';
const COUNTRY_CODES_URL = 'http://localhost:3000/countryCodes';

export const fetchCountryByCurrency = async (currencyCode) => {
  const response = await axios.get(`${BASE_URL}/currency/${currencyCode}`);
  return response.data;
};

export const fetchCountryCodes = async () => {
  const response = await axios.get(COUNTRY_CODES_URL);
  return response.data;
};

import axios from 'axios';

const API_KEY = '7a0ca7d6'; 

export const searchMovies = async (searchQuery) => {
  const response = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchQuery}`);
  return response.data.Search;
};

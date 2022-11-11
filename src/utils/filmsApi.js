import axios from 'axios';

const API_KEY = 'db35b30505be40a9278db1f8a9f126fa';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrending = () => {
  return axios
    .get(`/trending/movie/day?api_key=${API_KEY}`)
    .then(res => res.data.results);
};

export const getMovie = query => {
  return axios
    .get(
      `/search/movie?api_key=${API_KEY}&query=${query}&page=1&include_adult=false`
    )
    .then(res => res.data.results);
};

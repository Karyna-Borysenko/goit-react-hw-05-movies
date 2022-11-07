import axios from 'axios';

const KEY = 'f34ed5891c665d5a7f0c87dfa3d7e171';

//---- Запрос самых популярных фильмов на сегодня ----
export const fetchTrendingMovies = async () => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/trending/all/day',
    {
      params: {
        api_key: KEY,
      },
    }
  );
  return response.data;
};

//---- Запрос по поиску кинофильма ----
export const fetchMoviesbySearch = async input => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/search/movie',
    {
      params: {
        query: input,
        api_key: KEY,
      },
    }
  );
  return response.data;
};

//---- Запрос полной информации о фильме ----
export const fetchMovieDetails = async id => {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
    params: {
      api_key: KEY,
    },
  });
  return response.data;
};

//---- Запрос информации о актёрском составе ----
export const fetchMovieCast = async id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits`,
    {
      params: {
        api_key: KEY,
      },
    }
  );
  return response.data;
};

//---- Запрос обзоров ----
export const fetchMovieReviews = async id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews`,
    {
      params: {
        api_key: KEY,
      },
    }
  );
  return response.data;
};

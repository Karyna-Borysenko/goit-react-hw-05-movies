import { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

import Loader from '../../components/Loader/Loader';
import { fetchMoviesbySearch } from '../../components/MoviesAPI';

import {
  MovieSearchForm,
  MovieSearchButton,
  MovieSearchIcon,
  MovieSearchInput,
  MovieItem,
} from './Movies.styled';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const input = searchParams.get('input') ?? '';
  const [searchInput, setSearchInput] = useState(input ?? '');
  const location = useLocation();

  //---- Обновляем input ----
  function updateInput(event) {
    setSearchInput(event.currentTarget.value);
    if (event.currentTarget.value === '') {
      setSearchParams({});
      setMovies([]);
    }
  }

  //---- Нажимаем поиск ----
  function handleSubmit(event) {
    event.preventDefault();
    if (searchInput.trim() === '') {
      toast('Enter image name, please!', { icon: '🧐' });
      return;
    }

    setSearchParams({ input: searchInput });
  }

  //---- useEffect для поиска----
  useEffect(() => {
    if (input === '') {
      return;
    }
    async function fetchMovies() {
      try {
        setLoading(true);

        const searchMovies = await fetchMoviesbySearch(input);

        setMovies(searchMovies.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovies();
  }, [input]);

  //----Рендер----
  return (
    <>
      <MovieSearchForm onSubmit={handleSubmit}>
        <MovieSearchButton type="submit">
          <MovieSearchIcon />
        </MovieSearchButton>

        <MovieSearchInput
          name="input"
          value={searchInput}
          onChange={updateInput}
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search movies..."
        />
      </MovieSearchForm>

      {loading && <Loader loading={loading} />}
      {!loading && movies && input !== '' && (
        <ul>
          {movies.map(movie => (
            <MovieItem key={movie.id}>
              <Link to={`${movie.id}`} state={{ from: location }}>
                <p>{movie.title}</p>
              </Link>
            </MovieItem>
          ))}
        </ul>
      )}

      <Toaster position="top-right" />
    </>
  );
}

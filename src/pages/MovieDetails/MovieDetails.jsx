import { useState, useEffect, Suspense } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';

import { fetchMovieDetails } from '../../components/MoviesAPI';

import {
  BackLink,
  Container,
  Image,
  MovieInfoContainer,
  MovieTitle,
  Сriteria,
  Details,
  Average,
  LinkContainer,
  StyledLink,
} from './MovieDetails.styled';

export default function MovieDetails() {
  const [movie, setMovie] = useState([]);
  const { moviesId } = useParams();

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    async function fetchDetails() {
      try {
        const movieDetails = await fetchMovieDetails(moviesId);
        setMovie(movieDetails);
      } catch (error) {
        console.log(error);
      }
    }
    fetchDetails();
  }, [moviesId]);

  const { poster_path, release_date, title, vote_average, overview, genres } =
    movie;

  return (
    <>
      <BackLink to={backLinkHref}>⇦ Back</BackLink>
      <Container>
        {poster_path ? (
          <Image
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={title}
          />
        ) : (
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/4/43/Illustration_of_an_image.png"
            alt={title}
          />
        )}

        <MovieInfoContainer>
          <MovieTitle>
            {title} ({release_date && new Date(release_date).getFullYear()})
          </MovieTitle>
          <Details>
            User score: <Average> {Math.round(vote_average * 10)}%</Average>
          </Details>
          <Сriteria>Overview</Сriteria>
          <Details>{overview}</Details>
          <Сriteria>Geners</Сriteria>
          {genres && (
            <Details>{genres.map(genre => genre.name).join(' ')}</Details>
          )}
        </MovieInfoContainer>
      </Container>
      <LinkContainer>
        <StyledLink to="cast" state={{ from: backLinkHref }}>
          Cast
        </StyledLink>
        <StyledLink to="reviews" state={{ from: backLinkHref }}>
          Reviews
        </StyledLink>
      </LinkContainer>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}

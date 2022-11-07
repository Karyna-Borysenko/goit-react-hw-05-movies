import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMovieCast } from '../../components/MoviesAPI';

import {
  CastList,
  CastItem,
  Image,
  ActorName,
  ActorCharacter,
  Notification,
} from '../Cast/Cast.styled';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { moviesId } = useParams();

  useEffect(() => {
    async function fetchCast() {
      try {
        const movieCast = await fetchMovieCast(moviesId);
        setCast(movieCast.cast);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCast();
  }, [moviesId]);

  return (
    <>
      {cast.length !== 0 ? (
        <CastList>
          {cast.map(actor => (
            <CastItem key={actor.id}>
              {actor.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                  alt={actor.name}
                />
              ) : (
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/4/43/Illustration_of_an_image.png"
                  alt={actor.name}
                />
              )}

              <ActorName>{actor.name}</ActorName>
              <ActorCharacter>{actor.character}</ActorCharacter>
            </CastItem>
          ))}
        </CastList>
      ) : (
        <Notification>
          We don't know what the cast is in this movie 😢 Or maybe it's a
          cartoon...?
        </Notification>
      )}
    </>
  );
}

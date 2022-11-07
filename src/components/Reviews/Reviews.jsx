import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMovieReviews } from '../../components/MoviesAPI';

import {
  ReviewAuthor,
  ReviewContent,
  Notification,
} from '../Reviews/Reviews.styled';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { moviesId } = useParams();

  useEffect(() => {
    async function fetchReviews() {
      try {
        const movieReviews = await fetchMovieReviews(moviesId);
        setReviews(movieReviews.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchReviews();
  }, [moviesId]);

  return (
    <>
      {reviews.length !== 0 ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <ReviewAuthor> Author: {review.author}</ReviewAuthor>
              <ReviewContent>{review.content}</ReviewContent>
            </li>
          ))}
        </ul>
      ) : (
        <Notification>We don`t have any reviews for this movie 😢</Notification>
      )}
    </>
  );
}

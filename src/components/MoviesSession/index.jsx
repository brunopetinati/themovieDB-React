import React from 'react';
import { useState, useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addMoviesThunk } from '../../store/modules/movies/thunk'
import { Container } from './styles'
import MovieCard from '../MovieCard'


const MoviesSession = ({ genre }) => {

  const dispatch = useDispatch();
  const [error, setError] = useState(false);

  const [exampleTitle, setExampleTitle] = useState('')
  const [examplePosterPath, setExamplePosterPath] = useState('')
  const [exampleVotaAverage, setExampleVotaAverage] = useState('')
  const [exampleOverview, setExampleOverview]= useState('')

  let movies = useSelector((state) => state.movies[0]);

  useEffect(() => {
    dispatch(addMoviesThunk(setError));
    if (movies) {
      movies = movies[0]
      setExampleTitle(movies.original_title)
      setExamplePosterPath(movies.poster_path)
      setExampleVotaAverage(movies.vote_average)
      setExampleOverview(movies.overview)
    }
  }, [movies]);
  

  return (
    <Container>
      <h2>{genre || 'MissingValue'}</h2>
      <MovieCard title={exampleTitle} poster_path={examplePosterPath} vote_average={exampleVotaAverage} overview={exampleOverview}/>
    </Container>
  )
};

export default MoviesSession;
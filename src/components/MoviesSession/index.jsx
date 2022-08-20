import { useState, useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addMoviesThunk } from '../../store/modules/movies/thunk'
import { Container } from './styles'
import MovieCard from '../MovieCard'


const MoviesSession = ({ genre }) => {

  const dispatch = useDispatch();
  const [error, setError] = useState(false);

  const movies = useSelector((state) => state.movies);

  console.log('aqui está o movies', movies)


  useEffect(() => {
    dispatch(addMoviesThunk(setError));
  }, [dispatch]);

  return (
    <Container>
      <h2>{genre || 'Title Example'}</h2>
    </Container>
  )
};

export default MoviesSession;
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addMoviesThunk } from '../../store/modules/movies/thunk'
import { IMAGE_BASE_URL } from '../../constants/urls'

const MovieCard = ({ title, poster_path, vote_average, overview}) => {

  const dispatch = useDispatch();
  const [error, setError] = useState(false);

  const movies = useSelector((state) => state.movies);

  console.log('aqui está o movies', movies)


  useEffect(() => {
    dispatch(addMoviesThunk(setError));
  }, [dispatch]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
       <div className="card">
        <img src="img_avatar.png" alt="kkk nem a imagem ta aparecendo"/>
        <div className="container">
          <h4><b>{title}</b></h4>
          <p>{overview}</p>
          <p>{vote_average}</p>
        </div>
      </div> 
    </motion.div>
  )
};

export default MovieCard;
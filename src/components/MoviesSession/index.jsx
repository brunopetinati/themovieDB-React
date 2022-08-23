import React from 'react';
import { motion } from 'framer-motion'
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { Title, MoviesSessionContainer } from './styles'
import { Swiper, SwiperSlide } from 'swiper/react'
import { getMoviesThunk } from '../../store/modules/movies/thunk'
import 'swiper/css/bundle'
import MovieCard from '../MovieCard'


const MoviesSession = ({ genre, URL, index }) => {

  const dispatch = useDispatch();

  const movies = useSelector((state) => state.movies[index]);

  useEffect(() => {
    dispatch(getMoviesThunk(URL));
  }, [dispatch, URL]);


  return (
    <motion.div
    key={index}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 2 }}
    >
      <Title>{genre || 'Outros'}</Title>
      <Swiper 
      key={index}
      slidesPerView={7}
      scrollbar={{ draggable: true }}
      loop={true}
      breakpoints={
        {
          640: {
            slidesPerView: 6
          },
          1366: {
            slidesPerView: 7
          },
          1920: {
            slidesPerView: 9
          },
          3840: {
            slidesPerView: 15
          },
        }
      }
      style={{zIndex: 0}}
      >
        <MoviesSessionContainer>
          { movies && movies.map((movie, index) => 
          <SwiperSlide key={index}>
            <MovieCard 
            key={movie.id}
            title={movie.original_title} 
            poster_path={movie.poster_path} 
            vote_count={movie.vote_count}
            vote_average={movie.vote_average} 
            overview={movie.overview}
            original_language={movie.original_language}
            popularity={movie.popularity}
            release_date={movie.release_date}
            video={movie.video}
            />
          </SwiperSlide>)
          }
        </MoviesSessionContainer>
      </Swiper>
    </motion.div>
  )
};

export default MoviesSession;
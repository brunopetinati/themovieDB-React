import React, { Component } from 'react';
import { motion } from 'framer-motion'
import { useState, useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { mostPopularThunk } from '../../store/modules/movies/thunk'
import { Title, MoviesSessionContainer } from './styles'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/bundle'
import MovieCard from '../MovieCard'


const MoviesSession = ({ genre }) => {

  const dispatch = useDispatch();
  const [error, setError] = useState(false);

  const movies = useSelector((state) => state.movies[0]);

  useEffect(() => {
    console.log('quantas vezes renderiza?')
    dispatch(mostPopularThunk(setError));
  }, []);


  return (<motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 2 }}
  >
      <Title>{genre || 'Outros'}</Title>
      <Swiper 
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
          { movies && movies.map((movie) => 
          <SwiperSlide>
            <MovieCard 
            key={movie.original_title}
            title={movie.original_title} 
            poster_path={movie.poster_path} 
            vote_average={movie.vote_average} 
            overview={movie.overview}
            />
          </SwiperSlide>)
          }
        </MoviesSessionContainer>
      </Swiper>
    </motion.div>
  )
};

export default MoviesSession;
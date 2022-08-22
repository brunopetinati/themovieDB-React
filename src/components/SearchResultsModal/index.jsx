import { Swiper, SwiperSlide } from 'swiper/react'
import MovieCard from '../MovieCard'
import { Container } from './styles'


const SearchResultModal = ({moviesFromSearchBar, inputValue}) => {

  return(
  <Container>
    <h2>Aqui estão os resultados para sua busca em <createdtag>{inputValue}</createdtag></h2>
    <Swiper 
      slidesPerView={5}
      loop={true}
      style={{zIndex: 0}}
      >
        { moviesFromSearchBar && moviesFromSearchBar.map((movie, index) => 
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

    </Swiper>
  </Container>)
};


export default SearchResultModal;
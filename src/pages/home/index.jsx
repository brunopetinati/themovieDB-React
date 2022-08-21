import { Container, SearchBarContainer } from './styles'
import SearchBar  from '../../components/SearchBar'
import MoviesSession from '../../components/MoviesSession'
import { MOST_POPULAR_URL, KIDS_URL, DRAMA_URL } from '../../constants/urls'

const HomePage = () => {
  return(
    <Container>
      <SearchBarContainer>
        <h2>Welcome.</h2>
        <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
        <span>This is a small project that consumes the "The Movie DB API" available for developers. All rights reserved. You can checkout for more clicking <strong><a href="https://www.themoviedb.org/documentation/api">here!!</a></strong></span>
        <SearchBar />
      </SearchBarContainer>
      <MoviesSession key={0} genre={'Populares'} URL={MOST_POPULAR_URL} index={0}/>
      <MoviesSession key={1} genre={'KIDS'} URL={KIDS_URL} index={1} />
      <MoviesSession key={2} genre={'Dramas'} URL={DRAMA_URL} index={2} />

    </Container>
  )
};

export default HomePage;
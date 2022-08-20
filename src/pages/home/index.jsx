
import { SearchBarContainer } from './styles'
import SearchBar  from '../../components/SearchBar'
import MoviesSession from '../../components/MoviesSession'

const HomePage = () => {
  return(
    <>
      <SearchBarContainer>
        <h2>Welcome.</h2>
        <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
        <span>This is a small project that consumes the "The Movie DB API" available for developers. All rights reserved. You can checkout for more clicking <strong><a href="https://www.themoviedb.org/documentation/api">here!!</a></strong></span>
        <SearchBar />
      </SearchBarContainer>
      <MoviesSession />
    </>
  )
};

export default HomePage;
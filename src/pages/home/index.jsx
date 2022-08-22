import { Container, SearchBarContainer } from './styles'
import SearchBar  from '../../components/SearchBar'
import MoviesSession from '../../components/MoviesSession'
import { MOST_POPULAR, KIDS, DRAMA, SCI_FY, NOW_ON_THE_CINEMA, BEST_OF_2022 } from '../../constants/urls'

const HomePage = () => {

  return(
    <Container>
      <SearchBarContainer>
        <h2>Welcome.</h2>
        <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
        <span>This is a small project that consumes the "The Movie DB API" available for developers. All rights reserved. You can checkout for more clicking <strong><a href="https://www.themoviedb.org/documentation/api">here!!</a></strong></span>
        <SearchBar />
      </SearchBarContainer>
      <MoviesSession keyProp={1} genre={'Populares'} URL={MOST_POPULAR} index={0}/>
      <MoviesSession keyProp={2} genre={'KIDS'} URL={KIDS} index={1} />
      <MoviesSession keyProp={3} genre={'Dramas'} URL={DRAMA} index={2} />
      <MoviesSession keyProp={4} genre={'Ficção Científica'} URL={SCI_FY} index={3} />
      <MoviesSession keyProp={5} genre={'Você também pode gostar'} URL={NOW_ON_THE_CINEMA} index={4} />
      <MoviesSession keyProp={6} genre={'Melhores de 2022'} URL={BEST_OF_2022} index={5} />
    </Container>
  )
};

export default HomePage;

import { Container, SearchInput, SearcButton } from './styles'


const SearchBar = () => {

	return (
	<Container>
		<SearchInput placeholder="Search for a movie, TV show, person..."></SearchInput>
		<SearcButton>Search</SearcButton>
	</Container>	
	)
};

export default SearchBar;
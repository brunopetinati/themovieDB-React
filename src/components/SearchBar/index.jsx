import axios from "axios";
import { useState, useEffect } from "react";
import { API_BASE_URL, API_KEY } from "../../constants/urls";
import { Container, SearchInput, SearcButton } from './styles'
import Modal from 'react-modal'
import x from '../../assets/times-solid.svg'
import SearchResultModal from '../SearchResultsModal'
import customModalStyle from '../SearchResultsModal/custom'



const SearchBar = () => {

  const [input, setInput] = useState("");
	const [modal, showModal] = useState(false)
	const [moviesFromSearchBar, setMoviesFromSearchBar] = useState([])

	const searchForMovie = () => {
		if(input != ''){ 
			axios
    	.get(`${API_BASE_URL}/search/movie?query=${input+API_KEY}`)
			.then(res => setMoviesFromSearchBar(res.data.results), showModal(true))
			.catch(err => console.log('Ocorreu o seguinte erro ao processar requisição axios em SearchBar:', err))
		}
	};

	const handleToggle = () => {
    showModal(!modal)
  };


	return (<>
		<Container>
			<SearchInput placeholder="Encontre filmes que você nem sabia que existia! Os títulos dos filmes estão no idioma inglês ou idiomas asiáticos!" 
			value={input} 
			onChange={(e) => setInput(e.target.value)} />
			<SearcButton onClick={() => searchForMovie(input)}>Search</SearcButton>
		</Container>
		<Modal
      isOpen={modal}
      style={customModalStyle}
      > 
      <img src={x} onClick={handleToggle} style={{width: '15px', marginLeft: '1278px', cursor: 'pointer'}} alt="x"/> 
			{moviesFromSearchBar && <SearchResultModal moviesFromSearchBar={moviesFromSearchBar} inputValue={input}/>}
		</Modal>	
	</>
	)
};

export default SearchBar;
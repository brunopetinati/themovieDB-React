import { IMAGE_BASE_URL } from '../../constants/urls'
import { dayMonthYearPTBR } from '../../constants/date_convert'
import { Container } from './styles'

const MovieModal = ({title, poster_path, vote_count, vote_average, overview, original_language, popularity, release_date, video}) => {

  return(
    <Container>
      <img src={IMAGE_BASE_URL + poster_path} alt="Imagem" style={{width: '150px'}}/>
      <h3>{title}</h3>
      <div>Nota: {vote_average}</div>
      <div>Votos: {vote_count}</div>
      <div>Lançamento: {dayMonthYearPTBR(release_date)}</div>
      <div>Idioma: {original_language}</div>
      <div>Popularidade: {popularity}</div>
      <h4>Sinopse (em inglês)</h4>
      <p>{overview}</p> 
    </Container>
  )
};

export default MovieModal;
import { useState } from "react";
import { IMAGE_BASE_URL } from '../../constants/urls'
import { CardStyle, HeaderCardStyle, VoteAverageOrangeStyle, VoteAverageGreenStyle  } from './styles'
import customModalStyle from '../MovieModal/custom'
import MovieModal from '../MovieModal'
import Modal from 'react-modal'
import x from '../../assets/times-solid.svg'
import { monthYearPTBR } from "../../constants/date_convert";


const MovieCard = ({ title, poster_path, vote_average, vote_count, overview, original_language, popularity, release_date, video}) => {

  const [modal, showModal] = useState(false);
  
  const handleToggle = () => {
    showModal(!modal)
  };


  return (
    <>
      <CardStyle onClick={() => handleToggle()}>
        <img src={IMAGE_BASE_URL + poster_path} alt="Sem imagem"/>
        {vote_average < 5 ? <VoteAverageOrangeStyle>{vote_average}</VoteAverageOrangeStyle> : <VoteAverageGreenStyle>{vote_average}</VoteAverageGreenStyle>}
        <HeaderCardStyle>
          <h4>{title}</h4>
          <span>{monthYearPTBR(release_date)}</span>
        </HeaderCardStyle>
      </CardStyle> 

      <Modal
      isOpen={modal}
      style={customModalStyle}
      > 
        <img src={x} onClick={handleToggle} style={{width: '15px', marginLeft: '580px', cursor: 'pointer'}} alt="Imagem"/> 
        <MovieModal 
        title={title} 
        poster_path={poster_path}
        overview={overview} 
        vote_count={vote_count} 
        vote_average={vote_average} 
        original_language={original_language}
        popularity={popularity}
        release_date={release_date}
        video={video}
        />
      </Modal>
    </>
  )
};

export default MovieCard;
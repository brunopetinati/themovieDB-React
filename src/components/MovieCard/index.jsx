import { useState, useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { IMAGE_BASE_URL } from '../../constants/urls'
import { CardStyle, HeaderCardStyle, VoteAverageOrangeStyle, VoteAverageGreenStyle  } from './styles'
import Modal from 'react-modal'



const MovieCard = ({ title, poster_path, vote_average, overview}) => {

  const [modal, showModal] = useState(false);
  
  const handleToggle = () => {
    showModal(!modal)
  };

  const customStyle = {
    content: {
      top:'50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }
  }


  return (<>
       <CardStyle onClick={() => handleToggle()}>
        <img src={IMAGE_BASE_URL + poster_path} alt="Imagem"/>
        {vote_average < 5 ? <VoteAverageOrangeStyle>{vote_average}</VoteAverageOrangeStyle> : <VoteAverageGreenStyle>{vote_average}</VoteAverageGreenStyle>}
        <HeaderCardStyle>
          <h4>{title}</h4>
          <span>Jul 29,  2022</span>
        </HeaderCardStyle>
      </CardStyle> 
      <Modal
      isOpen={modal}
      onRequestClose={modal}
      style={customStyle}
      > 
      <h6>{overview}</h6> 
      <button onClick={handleToggle}></button>
      </Modal>
    </>
  )
};

export default MovieCard;
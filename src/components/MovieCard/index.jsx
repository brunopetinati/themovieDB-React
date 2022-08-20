import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { IMAGE_BASE_URL } from '../../constants/urls'
import { CardStyle, HeaderCardStyle } from './styles'

import { VoteAverageRedStyle, VoteAverageOrangeStyle, VoteAverageGreenStyle } from './styles'



const MovieCard = ({ title, poster_path, vote_average, overview}) => {
  

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
       <CardStyle>
        <img src={IMAGE_BASE_URL + poster_path} alt="Imagem"/>
        {vote_average < 5 ? <VoteAverageOrangeStyle>{vote_average}</VoteAverageOrangeStyle> : <VoteAverageGreenStyle>{vote_average}</VoteAverageGreenStyle>}
        <HeaderCardStyle>
          <h4>{title}</h4>
          <span>Jul 29,  2022</span>
        </HeaderCardStyle>
      </CardStyle> 
    </motion.div>
  )
};

export default MovieCard;
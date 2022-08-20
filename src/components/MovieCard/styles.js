import styled from "styled-components";
import { rem } from 'polished'

import colors from '../../constants/colors'
import banner from '../../assets/banner.jpg'

const white = colors.white

export const SearchBarContainer = styled.hgroup`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;

  background: url(${banner}) no-repeat;
  background-size: 100%;
  background-color: ${white};
  
  min-height: ${rem(300)};
  height: ${rem(360)};
  width:100vw;

  font-size: 2rem;
  font-family: 'Source Sans Pro', Arial, sans-serif;
  color: white !important;

  h2, h3, span {
    margin: 0 auto;
    margin-left: ${rem(32)};
  }

  span {
    font-size: ${rem(12)};
  }
`;

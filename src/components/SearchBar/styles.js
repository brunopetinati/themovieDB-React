import styled from "styled-components";
import { rem } from 'polished'

import colors from '../../constants/colors'

const placeHolderColor = colors.placeHolder
const textInputColor = colors.text
const gradientSearchButton = colors.gradientSearchButton
const gradientSearchButtonOnHover = colors.gradientSearchButtonOnHover
const white = colors.white
const inputColor = colors.body

export const Container = styled.div`
  display:flex;
  flex-direction: row;
  align-items: center;
  margin-top: ${rem(64)};
  margin-left: ${rem(32)};
`;


export const SearchInput = styled.input`
  width: 90%;
  height: ${rem(24)};
  font-size: ${rem(16)};
  color: ${placeHolderColor};
  background-color:${inputColor};
  border: none;
  border-radius: ${rem(30)};
  padding: ${rem(10)} ${rem(20)};
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;

  :focus {
    color: ${textInputColor};
  }
`;

export const SearcButton = styled.button`
  background: linear-gradient(to right, ${gradientSearchButton[0]}, ${gradientSearchButton[1]}); 
  color: ${white};
  font-weight: bold;
  font-size: ${rem(14)};
  border-radius: ${rem(30)};
  height: ${rem(46)};
  width: ${rem(96)};
  border: none;
  margin-left: ${rem(-96)};
  :hover {
    cursor: pointer;
    background: linear-gradient(to right, ${gradientSearchButtonOnHover[0]}, ${gradientSearchButtonOnHover[1]}); 
  }
`;

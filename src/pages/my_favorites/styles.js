import styled from "styled-components";
import { rem } from 'polished'
import colors from '../../constants/colors'

const blueForForms = colors.blueForForms
const white = colors.body

export const Container = styled.div`
  height: calc(100vh - ${rem(64)});
  width: 100vw;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background-color: ${blueForForms};
  color:${white};
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
`;
import styled from "styled-components";
import colors from '../../constants/colors'

const blueForForms = colors.blueForForms

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background-color: ${blueForForms}
`;
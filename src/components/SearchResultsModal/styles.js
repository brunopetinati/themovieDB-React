import styled from "styled-components";
import { rem } from 'polished'
import colors from '../../constants/colors'

export const Container = styled.div`
  margin: 0 auto;
  text-align: center;
  padding: ${rem(50)};

  strong {
    color: ${colors.gradientSearchButton[1]};
  }
`;
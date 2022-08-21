import styled from "styled-components";
import { rem } from 'polished'

import colors from '../../constants/colors'


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    margin: 0 auto;
    margin-top: 32px;
  }

  p {
    text-align: center;
  }
`;
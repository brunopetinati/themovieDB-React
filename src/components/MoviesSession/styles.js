import styled from "styled-components";
import { rem } from 'polished'

import colors from '../../constants/colors'

const white = colors.white

export const Title = styled.h2`
  margin-left: ${rem(32)};
  margin-bottom: 0;
`;

export const MoviesSessionContainer = styled.div`
  display:flex;
  flex-direction: row;
`;
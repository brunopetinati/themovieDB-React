import styled from "styled-components";
import { rem } from 'polished'

import colors from '../../constants/colors'

const white = colors.white

export const Container = styled.div`
  margin-top: ${rem(32)};
  h2 {
    margin-left: ${rem(32)};
  }
`;
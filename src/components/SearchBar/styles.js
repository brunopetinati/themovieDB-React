import styled from "styled-components";
import { MenuItem } from "@material-ui/core";
import { rem } from 'polished'

import colors from '../../constants/colors'
import logo from '../../assets/logo.svg'


const headerBackground = colors.headerBackground

export const HeaderStyle = styled.div`
  display: flex;
  background: url(${logo}) no-repeat 24px;
  background-color: ${headerBackground};
  height: ${rem(64)};
  width:100vw;
  font-size: 2rem;
  justify-content: center;
  align-items: center;
`;

export const HeaderButton = styled(MenuItem)`
  color: white !important;
  height:100%;
  &:hover {
    background-color:#680a5e!important;
  }
  @media (max-width: 1024px) {
    font-size: 10px !important;
  }
  @media (max-width: 750px) {
    font-size: 9px !important;
    width: 60%;
  }
`;
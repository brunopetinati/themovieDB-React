import styled from "styled-components";
import { MenuItem } from "@material-ui/core";
import { rem } from 'polished'

import colors from '../../constants/colors'
import logo from '../../assets/logo.svg'


const headerBackground = colors.headerBackground
const buttonOnHover = colors.buttonOnHover
const white = colors.white

export const NavigationBarStyle = styled.div`
  display: flex;
  background: url(${logo}) no-repeat ${rem(32)};
  background-size: ${rem(150)};
  background-color: ${headerBackground};
  height: ${rem(64)};
  width:100vw;
  justify-content: center;
  align-items: center;
`;

export const NavigationBarButton = styled(MenuItem)`
  color: ${white} !important;
  font-family: Arial, Helvetica, sans-serif !important;
  font-weight: 700 !important;
  height:100%;
  &:hover {
    background-color:${buttonOnHover}!important;
    border-radius: ${rem(8)};
  }
`;
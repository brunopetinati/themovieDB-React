import styled from "styled-components";
import { rem } from 'polished'
import colors from '../../constants/colors'
import Button from "@material-ui/core/Button";

const whiteOnPage = colors.body
const blueOnBackground = colors.blueForForms
const buttonOnHover = colors.buttonOnHoverForForms

export const DefaultForm = styled.form`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  margin:0 auto;
  background-color: ${blueOnBackground};
  color: white;
`;

export const StyledButton = styled(Button)`
  background-color: ${whiteOnPage} !important;
  width: ${rem(256)};
  height: ${rem(64)} !important;
  border: 1px solid !important;
  border-radius: 3% !important;
  margin-top: ${rem(16)} !important;
  color:  ${blueOnBackground} !important;
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif !important;
  font-weight: 700 !important;
  font-size: ${rem(16)} !important;
  &:hover {
    background-color: ${blueOnBackground} !important;
    color: ${buttonOnHover} !important;
  }
`;

export const StyledInput = styled.input`
  font-size: ${rem(18)};
  padding: ${rem(10)};
  margin: ${rem(10)};
  background: ${whiteOnPage};
  width:${rem(256)};
  border: none;
  outline: none;
  color:${blueOnBackground};
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
  border-radius: ${rem(3)};
  ::placeholder {
    color: ${blueOnBackground};
  }
`;
import styled from "styled-components";
import { rem } from 'polished'
import colors from '../../constants/colors'

const faded = colors.faded
const red = colors.red
const orange = colors.orange
const green = colors.green

export const CardStyle = styled.div`
 width: ${rem(150)};
 margin: ${rem(32)};
 display:flex;
 flex-direction: column;
 cursor: pointer;

 img {
  width: ${rem(150)};
  border-radius: 10%;
 }

 span {
  color: ${faded};
  margin: 0 auto;
  font-size: ${rem(12)};
 }
`;

export const HeaderCardStyle = styled.div`
 display:flex;
 flex-direction: column;
 align-items: center;
 justify-content: space-around;
 text-align: center;

 h4 {
  margin: 0 auto;
  margin-bottom: ${rem(8)};
 }
`;

const VoteAverage = styled.div`
height: ${rem(30)};
width: ${rem(30)};
border-radius:100%;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
margin-top: ${rem(-20)};
margin-left: ${rem(134)};
background-color: white;
font-size: ${rem(13)};
`;

export const VoteAverageRedStyle = styled(VoteAverage)`
 color:${red};
`;

export const VoteAverageOrangeStyle = styled(VoteAverage)`
 color: ${orange};
`;

export const VoteAverageGreenStyle = styled(VoteAverage)`
 color: ${green};
`;
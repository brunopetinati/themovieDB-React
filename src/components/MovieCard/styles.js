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
 flex-direction: row;
 align-items: center;
 justify-content: space-around;
 margin-top: ${rem(8)};

 h4 {
  margin: 0 auto;
 }
`;

export const VoteAverageRedStyle = styled.p`
 color:${red};
`;

export const VoteAverageOrangeStyle = styled.p`
 color: ${orange};
`;

export const VoteAverageGreenStyle = styled.p`
 color: ${green};
 height: ${rem(30)};
 width: ${rem(30)};
 border-radius:100%;
 display: flex;
 flex-direction: row;
 justify-content: center;
 align-items: center;
 margin: 0 auto;
 margin-top: ${rem(-40)};
 background-color: white;
 font-size: ${rem(13)};
`;
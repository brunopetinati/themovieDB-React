import styled from "styled-components";
import { rem } from 'polished'
import colors from '../../constants/colors'

const faded = colors.faded
const red = colors.red
const orange = colors.orange
const green = colors.green

export const CardStyle = styled.div`
 width: 150px;
 margin: 32px;
 display:flex;
 flex-direction: column;

 img {
  width:150px;
  border-radius: 10%;
 }

 span {
  color: ${faded};
  margin: 0 auto;
  font-size: 12px;
 }
`;

export const HeaderCardStyle = styled.div`
 display:flex;
 flex-direction: row;
 align-items: center;
 justify-content: space-around;
 margin-top: 8px;

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
 height: 30px;
 width: 30px;
 border-radius:100%;
 display: flex;
 flex-direction: row;
 justify-content: center;
 align-items: center;
 margin: 0 auto;
`;
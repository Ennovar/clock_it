import { css } from 'styled-components';
import buttonColors from '../../assets/colors/buttons';

// const hierarchicalColor = (props) => {
//   if (props.primary) {
//     return colors['primary'];
//   } else if (props.secondary) {
//     return colors['secondary'];
//   } else if (props.disabled) {
//     return colors['disabled'];
//   }
// }

// props.type ? colors[props.type] : '#41addd'


const buttonStyles = css`
  display: inline-block;
  box-sizing: border-box;
  padding: 0.25em 2em;
  text-decoration: none;
  border-radius: 5px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  background-color: ${(props) => props.type ? buttonColors[props.type].background : 'black'};
  color: ${(props) => props.type ? buttonColors[props.type].text : 'black'};

  &:active {
    background: ${(props) => props.type ? buttonColors[props.type].background : 'black'};
    color: #fff;
  }
`;

export default buttonStyles;

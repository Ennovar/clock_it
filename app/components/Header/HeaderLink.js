import { Link } from 'react-router';
import styled from 'styled-components';

// Project imports
import buttonColors from 'assets/colors/buttons';

export default styled(Link)`
  display: inline-flex;
  padding: 0.25em 2em;
  margin: 1em;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  background-color: ${(props) => props.color ? buttonColors[props.color].background : 'black'};
  color: ${(props) => props.color ? buttonColors[props.color].text : 'black'};

  &:active {
    background: #9a9a97;
    color: #FFF;
  }
`;

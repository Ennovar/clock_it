import { Link } from 'react-router';
import styled from 'styled-components';

export default styled(Link)`
  width: 200px;
  border: 2px solid #9a9a97;
  border-radius: 4px;
  color: #9a9a97;
  cursor: pointer;
  display: inline-flex;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: bold;
  margin: 1em;
  padding: 0.25em 2em;
  text-align: center;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  outline: none;


  &:active,
  &:hover {
    background: #9a9a97;
    color: #FFF;
  }

  span {
    margin: 0 auto;
  }
`;

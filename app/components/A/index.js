/**
 * A link to a certain page, an anchor tag
 */
import palette from 'assets/colors/palette';
import styled from 'styled-components';

const A = styled.a`
  color: ${palette.blue};

  &:hover {
    color: #6cc0e5;
  }
`;

export default A;

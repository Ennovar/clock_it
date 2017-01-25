import styled from 'styled-components';

import NormalImg from 'components/Img';

const Img = styled(NormalImg)`
  width: 100%;
  margin: 0 auto;
  display: block;
`;
export const ImgSmall = styled(NormalImg)`
  width: 20%;
  min-width: 160px;
  margin: 10px auto;
  display: block;
`;

export default Img;

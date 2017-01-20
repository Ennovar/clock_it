/**
*
* Table
*
*/

import styled from 'styled-components';

const Table = styled.table`
  border: 1px solid #aaa;
  width: 100%;
`;
export const Thead = styled.thead`
  background-color: #dfdfdf;
`;
export const Tbody = styled.tbody`
  background-color: white;
  tr {
    &:hover {
      background-color: #fafafa;
    }
  }
`;
export const Tr = styled.tr`
`;
export const Td = styled.td`
  border: 1px solid #aaa;
  padding: 8px;
  text-align: center;
`;

export default Table;

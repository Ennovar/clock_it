/**
*
* TextInput
*
*/

import React from 'react';
import styled from 'styled-components';
const StyledTextInput = styled.input`
  padding: 8px;
  margin-top: 8px;
  border-bottom: 1px solid #222;

  &:focus {
    outline: none;
  }
`;

function TextInput(props) {
  return (
    <StyledTextInput type="text" {...props} />
  );
}

TextInput.propTypes = {

};

export default TextInput;

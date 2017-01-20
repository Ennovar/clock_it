/**
*
* DropDownInput
*
*/

import React from 'react';
// import styled from 'styled-components';


function DropDownInput(props) {
  const options = props.options.map((option) => {
    if (option.title) {
      return <option value={option.id}>{option.title}</option>;
    }
    return <option value={option.id}>{option.name}</option>;
  }
  );
  return (
    <select onChange={props.onChange}>
      {options}
    </select>
  );
}

DropDownInput.propTypes = {
  options: React.PropTypes.array,
  onChange: React.PropTypes.func,
};

export default DropDownInput;

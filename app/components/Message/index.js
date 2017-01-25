/**
*
* Message
*
*/

import React from 'react';
// import styled from 'styled-components';


function Message(props) {
  return (
    <div>
      <h3>{props.message}</h3>
    </div>
  );
}

Message.propTypes = {
  message: React.PropTypes.string,
};

export default Message;

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
      <h3>{props.message.text}</h3>
    </div>
  );
}

Message.propTypes = {

};

export default Message;

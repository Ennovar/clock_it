/**
*
* LoginForm
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import TextInput from '../TextInput';
import Button from '../Button';
import H1 from '../H1';
const Form = styled.div`
  display: block;
  * {
    display: block;
    width: 100%;
    text-align: center;
  }
`;
class LoginForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
        <Form>
          <TextInput onChange={this.props.onUsernameChange} placeholder="Username" />
          <TextInput onChange={this.props.onPasswordChange} placeholder="Password" type="password" />
          <Button onClick={this.props.onSubmit} >Submit</Button>
        </Form>
      </div>
    );
  }
}

LoginForm.propTypes = {
  onUsernameChange: React.PropTypes.func,
  onPasswordChange: React.PropTypes.func,
  onSubmit: React.PropTypes.func,
};

export default LoginForm;

/*
 *
 * LoginPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectLoginPage from './selectors';
import LoginForm from '../../components/LoginForm';
import Message from '../../components/Message';
import {
  usernameUpdateAction,
  passwordUpdateAction,
  tryUserLoginAction,
} from './actions';
export class LoginPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    console.log(this.props.LoginPage.message)
    return (
      <div>
        <Helmet
          title="LoginPage"
          meta={[
            { name: 'description', content: 'Login' },
          ]}
        />
        {this.props.LoginPage.message && <Message message={this.props.LoginPage.message} />}
        <LoginForm onUsernameChange={this.props.usernameUpdate} onPasswordChange={this.props.passwordUpdate} onSubmit={this.props.onSubmit} />
      </div>
    );
  }
}

LoginPage.propTypes = {
  usernameUpdate: PropTypes.func,
  passwordUpdate: PropTypes.func,
  onSubmit: PropTypes.func,
  LoginPage: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  LoginPage: makeSelectLoginPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    usernameUpdate: (event) => {
      dispatch(usernameUpdateAction(event.target.value));
    },
    passwordUpdate: (event) => {
      dispatch(passwordUpdateAction(event.target.value));
    },
    onSubmit: () => {
      console.log('hello')
      dispatch(tryUserLoginAction());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);

/*
 *
 * LoginPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  USERNAME_UPDATE,
  PASSWORD_UPDATE,
  USER_LOGIN_ERROR,
  USER_LOGIN_SUCCESS,
} from './constants';

export const initialState = fromJS({});

function loginPageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case USERNAME_UPDATE:
      return { ...state, username: action.username };
    case PASSWORD_UPDATE:
      return { ...state, password: action.password };
    case USER_LOGIN_ERROR:
      return { ...state, message: { error: true, text: 'Error logging in.' } };
    case USER_LOGIN_SUCCESS:
      return { ...state, error: false, user: action.user.data };
    default:
      return state;
  }
}

export default loginPageReducer;

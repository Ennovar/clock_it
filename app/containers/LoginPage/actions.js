/*
 *
 * LoginPage actions
 *
 */

import {
  DEFAULT_ACTION,
  USERNAME_UPDATE,
  TRY_USER_LOGIN,
  PASSWORD_UPDATE,
  USER_LOGIN_ERROR,
  USER_LOGIN_SUCCESS,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function usernameUpdateAction(username) {
  return {
    type: USERNAME_UPDATE,
    username,
  };
}
export function passwordUpdateAction(password) {
  return {
    type: PASSWORD_UPDATE,
    password,
  };
}
export function tryUserLoginAction() {
  return {
    type: TRY_USER_LOGIN,
  };
}
export function userLoginErrorAction() {
  return {
    type: USER_LOGIN_ERROR,
  };
}
export function userLoginSuccessAction() {
  return {
    type: USER_LOGIN_SUCCESS,
  };
}

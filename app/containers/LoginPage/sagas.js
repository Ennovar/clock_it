import { take, call, put, select } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import Api from '../../Api';
import {
  getUserInfo,
} from './selectors';
import {
  tryUserLoginAction,
  userLoginErrorAction,
  userLoginSuccessAction,
} from './actions';

// Individual exports for testing
export function* defaultSaga() {
  // See example in containers/HomePage/sagas.js
}
export function* userLogin() {
  try {
    const userInfo = yield select(getUserInfo());
    const user = yield call(Api.userLogin, userInfo.username, userInfo.password);
    yield put(userLoginSuccessAction(user));
  } catch (e) {
    yield put(userLoginErrorAction());
  }
}
export function* tryUserLoginSaga() {
  yield* takeLatest(tryUserLoginAction().type, userLogin);
}

// All sagas to be loaded
export default [
  defaultSaga,
  tryUserLoginSaga,
];

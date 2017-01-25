import { takeLatest } from 'redux-saga';
import { put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import {
  viewHoursAction,
  clockInAction,
} from './actions';
// Individual exports for testing
export function* defaultSaga() {
  // See example in containers/HomePage/sagas.js
}
export function* hoursViewRoute() {
  yield put(push('/hours'));
}
export function* clockInViewRoute() {
  yield put(push('/clockin'));
}
export function* hoursViewPageSaga() {
  yield* takeLatest(viewHoursAction().type, hoursViewRoute); // eslint-disable-line
}
export function* clockInViewPageSaga() {
  yield* takeLatest(clockInAction().type, clockInViewRoute); // eslint-disable-line
}

// All sagas to be loaded
export default [
  defaultSaga,
  hoursViewPageSaga,
  clockInViewPageSaga,
];

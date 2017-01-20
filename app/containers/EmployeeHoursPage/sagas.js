import { call, put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import {
  getTimeEntriesAction,
  getTimeEntriesSuccessAction,
} from './actions';
import Api from '../../Api';

// Individual exports for testing
export function* defaultSaga() {
  // See example in containers/HomePage/sagas.js
}
export function* getTimeEntries() {
  const timeEntries = yield call(Api.getTimeEntries);
  yield put(getTimeEntriesSuccessAction(timeEntries.data));
}
export function* getTimeEntriesSaga() {
  // See example in containers/HomePage/sagas.js
  yield* takeEvery(getTimeEntriesAction().type, getTimeEntries);
}

// All sagas to be loaded
export default [
  defaultSaga,
  getTimeEntriesSaga,
];

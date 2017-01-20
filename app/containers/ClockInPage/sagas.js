import { put, call, select } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { push } from 'react-router-redux';
import {
  clockInAction,
  getProjectsAction,
  getProjectsSuccessAction,
  getTasksSuccessAction,
  getTasksAction,
  clockInSuccessAction,
} from './actions';
import {
  getTaskId,
} from './selectors';

import Api from '../../Api';
// Individual exports for testing
export function* defaultSaga() {
  // See example in containers/HomePage/sagas.js
}
export function* clockIn() {
  const taskId = yield select(getTaskId());
  const timeEntry = yield call(Api.createTimeEntry, taskId);
  yield put(clockInSuccessAction(timeEntry.data));
  yield put(push('/dashboard'));
}
export function* getProjects() {
  const projects = yield call(Api.getProjects);
  yield put(getProjectsSuccessAction(projects.data));
}
export function* getTasks() {
  const tasks = yield call(Api.getTasks);
  yield put(getTasksSuccessAction(tasks.data));
}
export function* clockInSaga() {
  yield* takeLatest(clockInAction().type, clockIn);
}
export function* getProjectsSaga() {
  yield* takeLatest(getProjectsAction().type, getProjects);
}
export function* getTasksSaga() {
  yield* takeLatest(getTasksAction().type, getTasks);
}

// All sagas to be loaded
export default [
  defaultSaga,
  clockInSaga,
  getProjectsSaga,
  getTasksSaga,
];

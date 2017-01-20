/*
 *
 * EmployeeHoursPage actions
 *
 */

import {
  DEFAULT_ACTION,
  GET_TIME_ENTRIES,
  GET_TIME_ENTRIES_SUCCESS,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function getTimeEntriesAction() {
  return {
    type: GET_TIME_ENTRIES,
  };
}
export function getTimeEntriesSuccessAction(timeEntries) {
  return {
    type: GET_TIME_ENTRIES_SUCCESS,
    timeEntries,
  };
}

/*
 *
 * EmployeeHoursPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  GET_TIME_ENTRIES_SUCCESS,
} from './constants';

const initialState = fromJS({});

function employeeHoursPageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case GET_TIME_ENTRIES_SUCCESS:
      return { ...state, timeEntries: action.timeEntries };
    default:
      return state;
  }
}

export default employeeHoursPageReducer;

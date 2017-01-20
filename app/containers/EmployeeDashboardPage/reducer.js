/*
 *
 * EmployeeDashboardPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  CLOCK_IN_ACTION,
  CLOCK_OUT_ACTION,
  VIEW_HOURS_ACTION,
} from './constants';

const initialState = fromJS({});

function employeeDashboardPageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case CLOCK_IN_ACTION:
      return { ...state, clockedIn: true };
    case CLOCK_OUT_ACTION:
      return { ...state, clockedIn: false };
    case VIEW_HOURS_ACTION:
      return state;
    default:
      return state;
  }
}

export default employeeDashboardPageReducer;

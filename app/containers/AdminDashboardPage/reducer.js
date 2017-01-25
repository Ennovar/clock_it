/*
 *
 * AdminDashboardPage reducer
 *
 */

import {
  DEFAULT_ACTION,
  PEOPLE_HOURS_VIEW,
  PROJECT_HOURS_VIEW,
} from './constants';

export const initialState = {
  peopleHoursViewActive: true,
  projectHoursViewActive: false,
  loading: false,
};

function adminDashboardPageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case PEOPLE_HOURS_VIEW:
      return { ...state, peopleHoursViewActive: true, projectHoursViewActive: false };
    case PROJECT_HOURS_VIEW:
      return { ...state, peopleHoursViewActive: false, projectHoursViewActive: true };
    default:
      return state;
  }
}

export default adminDashboardPageReducer;

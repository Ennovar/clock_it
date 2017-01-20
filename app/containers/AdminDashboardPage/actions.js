/*
 *
 * AdminDashboardPage actions
 *
 */

import {
  DEFAULT_ACTION,
  PROJECT_HOURS_VIEW,
  PEOPLE_HOURS_VIEW,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function projectHoursViewAction() {
  return {
    type: PROJECT_HOURS_VIEW,
  };
}
export function peopleHoursViewAction() {
  return {
    type: PEOPLE_HOURS_VIEW,
  };
}

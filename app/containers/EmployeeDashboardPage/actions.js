/*
 *
 * EmployeeDashboardPage actions
 *
 */

import {
  DEFAULT_ACTION,
  CLOCK_IN_ACTION,
  CLOCK_OUT_ACTION,
  VIEW_HOURS_ACTION,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function clockInAction() {
  return {
    type: CLOCK_IN_ACTION,
  };
}
export function clockOutAction() {
  return {
    type: CLOCK_OUT_ACTION,
  };
}
export function viewHoursAction() {
  return {
    type: VIEW_HOURS_ACTION,
  };
}

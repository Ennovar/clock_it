import { createSelector } from 'reselect';

/**
 * Direct selector to the employeeHoursPage state domain
 */
const selectEmployeeHoursPageDomain = () => (state) => state.get('hours');

/**
 * Other specific selectors
 */


/**
 * Default selector used by EmployeeHoursPage
 */

const makeSelectEmployeeHoursPage = () => createSelector(
  selectEmployeeHoursPageDomain(),
  (substate) => substate
);

export default makeSelectEmployeeHoursPage;
export {
  selectEmployeeHoursPageDomain,
};

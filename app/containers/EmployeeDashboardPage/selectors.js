import { createSelector } from 'reselect';

/**
 * Direct selector to the employeeDashboardPage state domain
 */
const selectEmployeeDashboardPageDomain = () => (state) => state.get('employeeDashboardPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by EmployeeDashboardPage
 */

const makeSelectEmployeeDashboardPage = () => createSelector(
  selectEmployeeDashboardPageDomain(),
  (substate) => substate
);

export default makeSelectEmployeeDashboardPage;
export {
  selectEmployeeDashboardPageDomain,
};

import { createSelector } from 'reselect';

/**
 * Direct selector to the adminDashboardPage state domain
 */
const selectAdminDashboardPageDomain = () => (state) => state.get('admin');

/**
 * Other specific selectors
 */


/**
 * Default selector used by AdminDashboardPage
 */

const makeSelectAdminDashboardPage = () => createSelector(
  selectAdminDashboardPageDomain(),
  (substate) => substate
);

export default makeSelectAdminDashboardPage;
export {
  selectAdminDashboardPageDomain,
};

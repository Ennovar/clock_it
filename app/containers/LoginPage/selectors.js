import { createSelector } from 'reselect';

/**
 * Direct selector to the loginPage state domain
 */
const selectLoginPageDomain = () => (state) => state.get('login');

/**
 * Other specific selectors
 */


/**
 * Default selector used by LoginPage
 */

const makeSelectLoginPage = () => createSelector(
 selectLoginPageDomain(),
 (substate) => substate
);
const getUserInfo = () => createSelector(
 selectLoginPageDomain(),
 (substate) => substate
);

export default makeSelectLoginPage;
export {
  selectLoginPageDomain,
  getUserInfo,
};

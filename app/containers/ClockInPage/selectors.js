import { createSelector } from 'reselect';

/**
 * Direct selector to the clockInPage state domain
 */
const selectClockInPageDomain = () => (state) => state.get('clockin');
/**
 * Other specific selectors
 */


/**
 * Default selector used by ClockInPage
 */

const makeSelectClockInPage = () => createSelector(
 selectClockInPageDomain(),
 (substate) => substate
);
const getTaskId = () => createSelector(
  selectClockInPageDomain(),
  (substate) => substate.taskId
);

export default makeSelectClockInPage;
export {
  selectClockInPageDomain,
  getTaskId,
};


// import { fromJS } from 'immutable';
import employeeDashboardPageReducer, { initialState } from '../reducer';

describe('employeeDashboardPageReducer', () => {
  it('returns the initial state', () => {
    expect(employeeDashboardPageReducer(undefined, {})).toEqual(initialState);
  });
});

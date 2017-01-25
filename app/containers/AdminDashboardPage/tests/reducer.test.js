
import adminDashboardPageReducer, { initialState } from '../reducer';

describe('adminDashboardPageReducer', () => {
  it('returns the initial state', () => {
    expect(adminDashboardPageReducer(undefined, {})).toEqual(initialState);
  });
});

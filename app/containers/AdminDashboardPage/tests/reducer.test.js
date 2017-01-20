
import { fromJS } from 'immutable';
import adminDashboardPageReducer from '../reducer';

describe('adminDashboardPageReducer', () => {
  it('returns the initial state', () => {
    expect(adminDashboardPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});

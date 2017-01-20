
import { fromJS } from 'immutable';
import employeeDashboardPageReducer from '../reducer';

describe('employeeDashboardPageReducer', () => {
  it('returns the initial state', () => {
    expect(employeeDashboardPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});

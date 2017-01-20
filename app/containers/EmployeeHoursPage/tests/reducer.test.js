
import { fromJS } from 'immutable';
import employeeHoursPageReducer from '../reducer';

describe('employeeHoursPageReducer', () => {
  it('returns the initial state', () => {
    expect(employeeHoursPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});

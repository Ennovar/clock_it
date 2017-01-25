
import employeeHoursPageReducer, { initialState } from '../reducer';

describe('employeeHoursPageReducer', () => {
  it('returns the initial state', () => {
    expect(employeeHoursPageReducer(undefined, {})).toEqual(initialState);
  });
});

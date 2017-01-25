
import clockInPageReducer, { initialState } from '../reducer';

describe('clockInPageReducer', () => {
  it('returns the initial state', () => {
    expect(clockInPageReducer(undefined, {})).toEqual(initialState);
  });
});

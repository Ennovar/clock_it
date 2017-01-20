
import { fromJS } from 'immutable';
import clockInPageReducer from '../reducer';

describe('clockInPageReducer', () => {
  it('returns the initial state', () => {
    expect(clockInPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});

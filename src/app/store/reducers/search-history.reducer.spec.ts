// search-history.reducer.spec.ts
import { searchHistoryReducer, initialState } from './search-history.reducer';
import { addSearchHistory } from '../actions/search-history.action';

describe('Search History Reducer', () => {
  it('should return the initial state', () => {
    const action = { type: 'unknown' };
    const state = searchHistoryReducer(initialState, action);

    expect(state).toBe(initialState);
  });

  it('should add search history entry', () => {
    const action = addSearchHistory({
      query: 'my-github-user',
      success: true,
      userData: { login: 'my-githu-user' },
    });
    const state = searchHistoryReducer(initialState, action);

    expect(state.history.length).toBe(1);
    expect(state.history[0].query).toBe('my-github-user');
  });
});

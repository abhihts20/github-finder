// search-history.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { addSearchHistory, clearSearchHistory, loadSearchHistory } from '../actions/search-history.action';

export interface SearchHistoryState {
  history: { query: string; success: boolean, userData?: any }[];
}

export const initialState: SearchHistoryState = {
  history: []
};

export const searchHistoryReducer = createReducer(
  initialState,
  on(addSearchHistory, (state, { query, success, userData }) => ({
    ...state,
    history: [...state.history, { query, success, userData }]
  })),
  on(clearSearchHistory, state => ({
    ...state,
    history: []
  })),
  on(loadSearchHistory, (state, { history }) => ({
    ...state,
    history,
  }))
);

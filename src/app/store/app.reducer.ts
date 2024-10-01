
import { ActionReducerMap } from '@ngrx/store';
import { searchHistoryReducer, SearchHistoryState } from './reducers/search-history.reducer';


export interface AppState {
  searchHistory: SearchHistoryState;
}

export const reducers: ActionReducerMap<AppState> = {
  searchHistory: searchHistoryReducer,
};

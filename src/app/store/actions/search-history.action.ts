import { createAction, props } from '@ngrx/store';

export const addSearchHistory = createAction(
  '[Search History] Add Search History',
  props<{ query: string; success: boolean; userData?: any }>()
);

export const clearSearchHistory = createAction(
  '[Search History] Clear Search History'
);

export const loadSearchHistory = createAction(
  '[Search History] Load Search History',
  props<{
    history: Array<{ query: string; success: boolean; userData?: any }>;
  }>()
);

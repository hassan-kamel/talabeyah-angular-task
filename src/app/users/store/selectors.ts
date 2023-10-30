import { createSelector } from '@ngrx/store';
import { IAppState } from 'src/app/types/appState.interface';

export const selectFeature = (state: IAppState) => state.users;

export const usersSelector = createSelector(
  selectFeature,
  (state) => state.users
);
export const isLoadingSelector = createSelector(
  selectFeature,
  (state) => state.isLoading
);
export const errorSelector = createSelector(
  selectFeature,
  (state) => state.error
);

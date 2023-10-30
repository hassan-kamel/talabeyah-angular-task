import { createReducer, on } from '@ngrx/store';
import { IUserState } from '../types/usersState.interface';
import * as userActions from './actions';

export const initialState: IUserState = {
  isLoading: false,
  users: [],
  error: null,
};

export const userReducer = createReducer(
  initialState,
  on(userActions.search, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  on(userActions.load, (state) => ({ ...state, isLoading: true, error: null })),
  on(userActions.apiSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    users: action.users,
    error: null,
  })),
  on(userActions.apiFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
    users: [],
  }))
);

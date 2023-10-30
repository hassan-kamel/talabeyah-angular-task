import { createAction, props } from '@ngrx/store';
import { IUser } from '../types/user.interface';

export const load = createAction('[Users] load');

export const search = createAction(
  '[Users] search',
  props<{ query: string }>()
);

export const apiSuccess = createAction(
  '[Users] api success',
  props<{ users: IUser[] }>()
);

export const apiFailure = createAction(
  '[Users] api failure',
  props<{ error: string }>()
);

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { usersServices } from '../services/users.services';
import * as usersActions from './actions';
import { catchError, debounceTime, map, mergeMap, of, tap } from 'rxjs';

@Injectable()
export class usersEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(usersActions.load),
      mergeMap(() =>
        this.usersServices.getUsers().pipe(
          tap((val) => console.log(val)),
          map((users) => usersActions.apiSuccess({ users })),
          catchError((error) =>
            of(usersActions.apiFailure({ error: error.message }))
          )
        )
      )
    )
  );
  searchUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(usersActions.search),

      debounceTime(300),

      mergeMap((action) =>
        this.usersServices.searchUsers(action.query).pipe(
          tap((users) => {
            console.log(users);
            if (users.length === 0)
              throw new Error('there is no user for this search');
          }),

          map((users) => usersActions.apiSuccess({ users })),
          catchError((error) =>
            of(usersActions.apiFailure({ error: error.message }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private usersServices: usersServices
  ) {}
}

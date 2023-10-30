import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/types/appState.interface';
import { IUser } from '../../types/user.interface';
import { Observable } from 'rxjs';
import {
  errorSelector,
  isLoadingSelector,
  usersSelector,
} from '../../store/selectors';
import * as usersActions from '../../store/actions';
import { search } from '../../store/actions';

@Component({
  selector: 'Github-Users',
  templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit {
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  users$: Observable<IUser[]>;

  searchQuery: string = '';

  search() {
    // se;
    this.store.dispatch(usersActions.search({ query: this.searchQuery }));
  }
  constructor(private store: Store<IAppState>) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.users$ = this.store.pipe(select(usersSelector));
  }
  ngOnInit(): void {
    this.store.dispatch(usersActions.load());
  }
}

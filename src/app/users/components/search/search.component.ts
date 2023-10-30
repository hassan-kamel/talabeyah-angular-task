import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/types/appState.interface';

import * as usersActions from '../../store/actions';

@Component({
  selector: 'user-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  searchQuery: string = '';

  constructor(private store: Store<IAppState>) {}
  search() {
    if (this.searchQuery.length)
      this.store.dispatch(usersActions.search({ query: this.searchQuery }));
    this.store.dispatch(usersActions.load());
  }
}

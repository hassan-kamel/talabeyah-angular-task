import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/types/appState.interface';

import * as usersActions from '../../store/actions';
import { FormControl, FormGroup } from '@angular/forms';

interface SearchForm {
  query: FormControl<string>;
}
@Component({
  selector: 'user-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  searchForm: FormGroup<SearchForm>;

  constructor(private store: Store<IAppState>) {
    this.searchForm = new FormGroup<SearchForm>({ query: new FormControl() });
    this.searchForm.controls['query'].valueChanges.subscribe({
      next: (value) => {
        const query = value.trim();
        if (!query.length) this.store.dispatch(usersActions.load());
        else this.store.dispatch(usersActions.search({ query }));
      },
    });
  }
}

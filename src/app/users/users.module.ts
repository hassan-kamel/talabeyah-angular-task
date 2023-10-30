import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './components/users/users.component';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { usersEffects } from './store/effects';
import { usersServices } from './services/users.services';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [UsersComponent, SearchComponent, UserCardComponent, ErrorComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('users', userReducer),
    EffectsModule.forFeature([usersEffects]),
    FormsModule,
  ],
  providers: [usersServices],
  exports: [UsersComponent],
})
export class UsersModule {}

import { Component, Input } from '@angular/core';
import { IUser } from '../../types/user.interface';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
})
export class UserCardComponent {
  @Input() user: IUser | undefined;
}

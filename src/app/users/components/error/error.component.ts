import { Component, Input } from '@angular/core';

@Component({
  selector: 'user-error',
  templateUrl: './error.component.html',
})
export class ErrorComponent {
  @Input() errorMessage: string | undefined;
}

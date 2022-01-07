import { SpinnerService } from './../../services/spinner.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-spinner',
  template: `<div class="overlay" *ngIf="isLoading$ | async">
    <div class="lds-hourglass"></div>
  </div>`,
  styleUrls: ['./spinner.component.scss'],
  // providers: [SpinnerService],
})
export class SpinnerComponent {
  isLoading$ = this.spinnerService.isLoading$;
  constructor(private spinnerService: SpinnerService) {}
}

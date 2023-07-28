import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SpinnerService } from './shared/services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'scrumconnect-angular-test';
  showSpinner: BehaviorSubject<boolean>;

  constructor(private spinnerService: SpinnerService) {
    this.showSpinner = this.spinnerService.showSpinner;
  }
}

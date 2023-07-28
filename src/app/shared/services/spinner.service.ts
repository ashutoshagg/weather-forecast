import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SpinnerService {

  showSpinner: BehaviorSubject<boolean>;

  constructor() {
    this.showSpinner = new BehaviorSubject(false);
  }

  show() {
    this.showSpinner.next(true);
  }

  hide() {
    this.showSpinner.next(false);
  }

}

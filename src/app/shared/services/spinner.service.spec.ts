
import { defer } from 'rxjs';
import { mockedWeatherData } from 'src/app/testing/mock';
import { SpinnerService } from './spinner.service';

function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

describe('SpinnerService', () => {
  let service: SpinnerService;

  beforeEach(() => {
    service = new SpinnerService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should show the spinner', () => {
    service.show();
    service.showSpinner.subscribe(response => {
      expect(response).toBe(true);
    })
  });

  it('should hide the spinner', () => {
    service.hide();
    service.showSpinner.subscribe(response => {
      expect(response).toBe(false);
    })
  });
});

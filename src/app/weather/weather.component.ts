import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ISummary } from './models/weather-forecast.model';
import { AppState } from './store/state';
import * as weatherActions from './store/actions/weather.actions';
import * as selectors from './store/selectors/';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html'

})
export class WeatherComponent implements OnInit {

  cityWithTemperature: ISummary[];

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.select(selectors.getWeather).subscribe(cityWithTemperature => {
      this.cityWithTemperature = cityWithTemperature;
    })
  }

  citySearch(event: string) {
    // TO BE IMPLMENTED
    this.store.dispatch(new weatherActions.LoadCityWeather(event.toLowerCase()));

  }

  
}

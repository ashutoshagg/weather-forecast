// TO BE IMPLEMENTED IF YOU DECIDE TO USE NG-RX

import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';
import { WeatherService } from '../../services/weather.service';
import * as weatherActions from '../actions/weather.actions';

@Injectable()
export default class WeatherEffects {

  constructor(private actions: Actions, 
    private weatherService: WeatherService) { }

  @Effect()
  loadCity = this.actions
    .pipe(
      ofType(weatherActions.LOAD_CITY_WEATHER),
      switchMap((action: any) => {
        return this.weatherService.searchWeatherForCity(action.payload)
          .pipe(
            map(city => new weatherActions.LoadCityWeatherData(city)),
          );
      })
    );
}

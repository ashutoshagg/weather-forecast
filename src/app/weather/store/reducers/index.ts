import { ActionReducerMap } from '@ngrx/store';

  import * as fromWeather from './weather.reducer';

  export interface CityWeatherState {
    city: string;
  }

  export const reducers: ActionReducerMap<any>  = {
    city: fromWeather.reducer
  };



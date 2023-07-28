// TO BE IMPLEMENTED IF NF-RX IS USED

import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../state';

export interface CityState {
  city: AppState;
}

export const getWeatherState = createFeatureSelector<CityState>('weather');

export const getCityState = createSelector(
  getWeatherState,
  (state: CityState) => state.city
);

export const getWeather = createSelector(
  getCityState,
  (state: AppState) => state.weather
);

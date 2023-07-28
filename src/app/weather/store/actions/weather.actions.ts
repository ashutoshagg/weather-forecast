import { Action } from "@ngrx/store";
import { IWeatherForecast } from "../../models/weather-forecast.model";

// TO BE IMPLEMENTED IF YOU DECIDE TO USE NG-RX
export const LOAD_CITY_WEATHER = 'LOAD_CITY_WEATHER';
export const LOAD_CITY_WEATHER_DATA = 'LOAD_CITY_WEATHER_DATA';

export class LoadCityWeather implements Action {
    readonly type = LOAD_CITY_WEATHER;
    constructor(public payload: string) {}
}

export class LoadCityWeatherData implements Action {
    readonly type = LOAD_CITY_WEATHER_DATA;
    constructor(public payload: IWeatherForecast) {}
}

export type WheatherActions = LoadCityWeather | LoadCityWeatherData;

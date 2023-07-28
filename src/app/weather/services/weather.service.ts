import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IWeatherForecast } from '../models/weather-forecast.model';

@Injectable()
export class WeatherService {
  private params: any;

  constructor(private http: HttpClient) {
    this.params = {
      q: '',
      cnt: '8',
      units: 'metric',
      APPID: environment.weather_forecast_key
    };
  }

  searchWeatherForCity(city: string): Observable<IWeatherForecast> {
    this.params.q = city;
    return this.http.get<IWeatherForecast>(environment.webApi, { params: this.params });
  }

}

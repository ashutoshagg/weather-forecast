import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService } from './services/weather.service';
import { HttpClientModule } from '@angular/common/http';

// IF YOU DECIDE TO USE NG-RX YOU'LL NEED TO UNCOMMENT SOME LINES
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects } from './store';
import { SharedModule } from '../shared/shared.module';
import { WeatherComponent } from './weather.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    StoreModule.forFeature('weather', reducers),
    EffectsModule.forFeature(effects)
  ],
  declarations: [
    WeatherComponent,
  ],
  providers: [
    WeatherService,
  ],
  exports: [
    WeatherComponent,
  ]
})
export class WeatherModule { }

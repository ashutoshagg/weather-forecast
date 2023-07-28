import { Component, Input, OnChanges } from '@angular/core';
import { ISummary } from 'src/app/weather/models/weather-forecast.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html'
})
export class ResultsComponent implements OnChanges {

  @Input() 
  cityWithTemperature: ISummary[] = [];

  constructor() { }

  ngOnChanges() {
    // IMPLEMENT ANYTHING YOU BEKIEVE YOU MIGHT NEED HERE
    console.log('result ', this.cityWithTemperature)
  }
}



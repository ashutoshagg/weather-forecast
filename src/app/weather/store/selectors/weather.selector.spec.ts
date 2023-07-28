import { TestBed } from '@angular/core/testing';
import { combineReducers, Store, StoreModule } from '@ngrx/store';

import { reducers, CityWeatherState } from '../reducers';
import { getWeather } from './weather.selector';
import { LoadCityWeatherData } from '../actions/weather.actions';
import { mockedReturnedData, mockedWeatherData } from 'src/app/testing/mock';

describe('Weather Selectors', () => {
  let store: Store<CityWeatherState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          ...reducers,
          weather: combineReducers(reducers)
        })
      ]
    });

    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
  });


  it ('should return the weather object ', function() {
        let weather;
        store.select(getWeather).subscribe(value => weather = value);
        expect(weather).toEqual([]);
        store.dispatch(new LoadCityWeatherData(mockedWeatherData));
        expect(weather).toEqual([ mockedReturnedData ]);
    });


});

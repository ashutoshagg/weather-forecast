import { mockedReturnedData, mockedWeatherData } from 'src/app/testing/mock';
import * as weatherActions from '../actions/weather.actions';
import { initialState, reducer } from './weather.reducer';

describe ('Weather reducer ', function() {

    describe(' case undefined action ', function() {
        it ('should return initial state', function() {
            const action: any = {};
            const state = reducer(initialState, action);
            expect(state).toEqual(initialState);
        });
    });

    describe ('case LOAD_CITY_WEATHER', function() {
        it ('should return state with loading set to true', function() {
            const city = mockedWeatherData.city.name;
            const action = new weatherActions.LoadCityWeather(city);
            const state = reducer(initialState, action);
            expect(state.weather).toEqual([]);
        });

    });

    describe ('case LOAD_CITY_WEATHER_DATA', function() {
        it ('should return state with weather data', function() {
            const action = new weatherActions.LoadCityWeatherData(mockedWeatherData);
            const state = reducer(initialState, action);
            expect(state.weather).toEqual([ mockedReturnedData ]);
        });
    });

});

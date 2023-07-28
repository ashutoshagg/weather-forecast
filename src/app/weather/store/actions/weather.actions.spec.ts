import { mockedWeatherData } from 'src/app/testing/mock';
import * as weatherActions from './weather.actions';

describe ('Weather actions ', function() {
    const city = mockedWeatherData.city.name;

    it('should create LOAD_CITY_WEATHER action', function() {
        const action = new weatherActions.LoadCityWeather(city);
        expect({...action}).toEqual({
            type: weatherActions.LOAD_CITY_WEATHER,
            payload: city
        });
    });

    it('should create LOAD_CITY_WEATHER_SUCCESS action', function() {
        const action = new weatherActions.LoadCityWeatherData(mockedWeatherData);
        expect({...action}).toEqual({
            type: weatherActions.LOAD_CITY_WEATHER_DATA,
            payload: mockedWeatherData
        });
    });

});

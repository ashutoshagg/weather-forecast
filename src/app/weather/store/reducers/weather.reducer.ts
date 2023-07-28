import * as weatherActions from '../actions/weather.actions';
import * as _ from 'lodash';
import { formatObject } from '../../utils/utility';
import { AppState } from '../state';

export const initialState: AppState = {
    weather: [],
};

const loadCityWeatherData = (state, action) => {
  const { list, city } = action.payload;
  if (list) {
    const cityData = formatObject({ city: `${city.name} - ${city.country}` }, list);
    const weather = _.uniqBy([...state.weather, cityData], (weather) => weather.city);
    console.log(weather);
    return {
      ...state,
      weather,
    }
  } else {
      return state;
    }
};

export function reducer (state = initialState, action): AppState {
    switch (action.type) {
        case weatherActions.LOAD_CITY_WEATHER_DATA: 
            return loadCityWeatherData(state, action);
        default: 
            return state;
    }
}

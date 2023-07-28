import * as moment from 'moment';

export const CONSTANTS = {
  'TIME_FORMAT_TO_DISPLAY': 'ha',
  'TIMES_TO_DISPLAY': ['6am', '12am', '6pm', '12pm']
};

export const formatObject = (initValue, properties) => {
    properties.forEach((property) => {
        const key = moment(property.dt_txt).format(CONSTANTS.TIME_FORMAT_TO_DISPLAY);
        if (CONSTANTS.TIMES_TO_DISPLAY.includes(key)) {
          initValue[key] = Math.round(property.main.temp);
        }
      });
      return initValue;
};

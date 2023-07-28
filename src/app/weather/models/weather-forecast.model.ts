export interface IWeatherForecast {
    cod: string;
    message: number;
    cnt: number;
    list: IList[];
    city: ICity;
}

interface IList {
    dt: number;
    main: IMain;
    weather: IWeather[];
    clouds: ICloud;
    wind: IWind;
    visibility: number;
    pop: number;
    sys: ISy;
    dt_txt: string;
    rain?: any;
}

interface ICity {
    id: number;
    name: string;
    coord: ICoord;
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
}

interface IMain {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
}

interface IWeather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

interface ICloud {
    all: number;
}

interface IWind {
    speed: number;
    deg: number;
    gust: number;
}

interface ISy {
    pod: string;
}



interface ICoord {
    lat: number;
    lon: number;
}

export interface ISummary {
    city: string;
    '12pm'?: number;
    '6pm'?: number;
    '12am'?: number;
    '6am'?: number;
  }


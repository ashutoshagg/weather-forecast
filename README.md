<h1 align="center">Weather Forecast</h1>

[![Platform](https://img.shields.io/badge/Platform-Angular-brightgreen)](https://angular.io/docs)


## **Getting Started**

This section has the information about how to get started with the Weather Forecast for a city.

## **Prerequisites**

To Begin with the development you will need:

- **Git**
- **Node**
- **Visual Studio Code**
- **Angular 8**

## **To run the App**

1. Clone the repository - `git clone https://github.com/ashutoshagg/weather-forecast.git`
2. Execute `npm install`
3. Execute `npm run start`. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
4. To run the test cases, execute `npm run test`. 

## **App Demo**

<p align="center">
<img  src="https://github.com/ashutoshagg/weather-forecast/blob/main/demo/ss0.png" alt="logo">
</p>

## **How the app is structured**

- interceptors
  - Contains HttpInterceptor and ErrorInterceptor to handle spinner and toast messages while calling api.
- shared
  - Module having components and services that can be shared among feature modules.
  - components
    - Contains Results, Search and Spinner component
  - services
    - Contains SpinnerService which is used to show and hide the spinner
- testing
  - Contains mock data file
- weather
  - Feature module that contains all the weather related classes
  - models
    - Contains interfaces for weather api
  - services
    - Contains weather service which is used to fetch weather related data
  - store
    - global state that is used to manage city and its tempature at 12AM, 6AM, 6PM and 12PM
  - utils
    - Contains constants and utility files
- assets
  - Contains images and fonts for the app
- utils
  - Contains constants and utility files
- environments
  - Container dev and prod url and keys
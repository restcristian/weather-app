# Weather App


## Description

This web app  provides the current weather and projected forecast.

## Live demo
https://weather-app-brown-zeta.vercel.app/


The application takes the user's location using the `navigator` object available on the browser for the first time it loads, as well as when the input field is empty. Otherwise uses the city name.

## Tech Stack

The app was developed with the following technologies:

- [TypeScript](https://www.typescriptlang.org/)
- [React-Query](https://react-query-v3.tanstack.com/)
- [ESLint] (https://eslint.org/)
- [NextJS] (https://nextjs.org/) 
- [Husky] (https://github.com/typicode/husky) 
- SCSS
- Jest
- [React-Testing-Library](https://testing-library.com/docs/react-testing-library/intro/)
- Github Actions to run test tests and linting
- Vercel for Deployment

## Features

- A search box that either by clicking the magnifier icon button or entering a city.
- Current Temperature, Lows and Highs.
- Current location used on first request or when search input is empty.
- Forecast of the following days.
- Requests to the OpenWeather API are done on the server-side in order to not to expose the key on the client.
- Responsive Design 
- Requests are cached using React-Query


## Getting Started

This Project was developed using Node v17.2.0 and yarn First you will need to install the dependencies by running:


```bash
yarn install
```

Since this project fetches the OpenWeather you will need to create a .env.local file on the root of the project. and saved the token as follows:

```
OPEN_WEATHER_KEY=SECRET_KEY
OPEN_WEATHER_URL=https://api.openweathermap.org
```

Then, run the development server:

```
yarn dev
````

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Feature improvements

- [ ] Improve test coverage
- [ ] Make Cities to work as autocomplete.
- [ ] Consider implementing storybook for UI components.
##
Made by Cristian Restituyo

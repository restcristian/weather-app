const {
  OPEN_WEATHER_KEY,
  OPEN_WEATHER_URL,
} = process.env;

export interface WeatherAppConfig {
  openWeatherKey?: string;
  openWeatherUrl?: string;
}

export const weatherAppConfig: WeatherAppConfig = {
  openWeatherKey: OPEN_WEATHER_KEY,
  openWeatherUrl: OPEN_WEATHER_URL,
};

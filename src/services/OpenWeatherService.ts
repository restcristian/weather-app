import { OpenWeatherApiError } from "./errors";
import { OpenWeatherApiCurrentResponse } from "./types";

class OpenWeatherService {
  async getWeatherForecastByCity(city: string = "berlin") {
    const geoResponse = await this.getWeatherGeoDataByCity(city);

    const { lat, lon } = geoResponse[0];

    const response = await this.getWeatherForecastByCoordinates(lat, lon);

    return response;
  }

  async getWeatherGeoDataByCity(city: string) {
    const response = await (await fetch(`api/geocoding?city=${city}`)).json();

    if (response.statusCode) {
      throw new OpenWeatherApiError(response.message, response.statusCode);
    }

    return response;
  }

  async getWeatherForecastByCoordinates(lat?: number, lon?: number) {
    const response: OpenWeatherApiCurrentResponse = await (
      await fetch(`api/weather?lat=${lat}&lon=${lon}`)
    ).json();

    return response;
  }
}

export default new OpenWeatherService();

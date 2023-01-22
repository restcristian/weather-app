import { OpenWeatherApiError } from "./errors";
import {
  OpenWeatherApiCurrentResponse,
} from "./types";

class OpenWeatherService {
  async getWeatherForecastByCity(city: string = "berlin") {
    const geoResponse = await this.getWeatherGeoDataByCity(city);

    const { lat, lon } = geoResponse[0];

    const response: OpenWeatherApiCurrentResponse = await (
      await fetch(`api/weather?lat=${lat}&lon=${lon}`)
    ).json();

    
    return response;
  }

  async getWeatherGeoDataByCity(city: string){
    const response = await (await fetch(`api/geocoding?city=${city}`)).json();

    if (response.statusCode) {
      throw new OpenWeatherApiError(response.message, response.statusCode);
    }

    return response;
  }
}

export default new OpenWeatherService();

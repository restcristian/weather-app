import {
  OpenWeatherApiCurrentResponse,
  OpenWeatherApiGeolocationResponse,
} from "./types";

class OpenWeatherService {
  async getWeatherForecastByCity(city: string = "berlin") {
    try {
      const geoResponse = await this.getWeatherGeoDataByCity(city);
      const { lat, lon } = geoResponse[0];

      const response: OpenWeatherApiCurrentResponse = await (
        await fetch(`api/weather?lat=${lat}&lon=${lon}`)
      ).json();

      return response;
    } catch (error) {
      throw error;
    }
  }

  async getWeatherGeoDataByCity(city: string) {
    try {
      const response: OpenWeatherApiGeolocationResponse[] = await (
        await fetch(`api/geocoding?city=${city}`)
      ).json();
      return response;
    } catch (error) {
      throw error;
    }
  }
}

export default new OpenWeatherService();

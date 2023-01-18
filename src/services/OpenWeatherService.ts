import { Coord, OpenWeatherApiResponse } from "./types";

class OpenWeatherService {
  async getWeatherForecastByCity(city: string = "berlin") {
    try {
      const response: OpenWeatherApiResponse = await (
        await fetch(`api/weather?city=${city}`)
      ).json();
      return response;
    } catch (error) {
      throw error;
    }
  }
  async getWeatherForecastByCoordinates(
    coords: Coord = { lat: 52.5441468, lon: 13.404526 }
  ) {
    try {
      const { lat, lon } = coords;
      const response: OpenWeatherApiResponse = await (
        await fetch(`api/weather?lat=${lat}&lon=${lon}`)
      ).json();
      return response;
    } catch (error) {
      throw error;
    }
  }
}

export default new OpenWeatherService();

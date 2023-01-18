import { OpenWeatherApiResponse } from "./types";

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
}

export default new OpenWeatherService();

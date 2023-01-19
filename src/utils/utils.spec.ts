import { formatOpenWeatherIconUrl, formatTemperature } from ".";

describe("Utils", () => {
  describe("formatTemperature", () => {
    it("should return correct temperature format from a number", () => {
      expect(formatTemperature(273.6)).toBe("274°");
    });
  });
  describe("formatOpenWeatherIconUrl", () => {
    it("should return the full OpenWeather Icon Url for an icon string", () => {
      expect(formatOpenWeatherIconUrl("nx")).toBe(
        "http://openweathermap.org/img/wn/nx@2x.png"
      );
    });
  });
});

import { cleanup, render, screen } from "@testing-library/react";
import Weather from "@/components/ui/Weather";
import { OpenWeatherApiResponseMock } from "@/__mocks__";
import { formatTemperature } from "@/utils";

describe("Home", () => {
  afterEach(() => {
    cleanup();
  });

  const props = {
    data: OpenWeatherApiResponseMock,
  };
  it("renders without error", () => {
    const { baseElement } = render(<Weather {...props} />);
    expect(baseElement).toBeTruthy();
  });

  it("renders an image with with the icon as url", () => {
    render(<Weather {...props} />);
    const imageElement = screen.queryByTestId("weather-image");
    expect(imageElement?.getAttribute("src")).toContain(
      props.data.weather[0].icon
    );
  });

  it("renders the high temperature and low temperature", () => {
    render(<Weather {...props} />);
    const highTempText = screen.queryByTestId("high-temp-text");
    const lowTempText = screen.queryByTestId("low-temp-text");

    expect(highTempText?.innerHTML).toBe(
      `H: ${formatTemperature(props.data.main.temp_max)}`
    );
    expect(lowTempText?.innerHTML).toBe(
      `L: ${formatTemperature(props.data.main.temp_min)}`
    );
  });

  it("renders the main temperature", () => {
    render(<Weather {...props} />);
    const tempElement = screen.queryByTestId("temp-text");

    expect(tempElement?.innerHTML).toBe(
      `${formatTemperature(props.data.main.temp)}`
    );
  });
});
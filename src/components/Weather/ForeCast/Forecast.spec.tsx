import { cleanup, render, screen } from "@testing-library/react";
import ForeCast from "@/components/Weather/ForeCast";
import { OpenWeatherApiCurrentResponseMock } from "@/__mocks__";
import { formatTemperature } from "@/utils";
import React from "react";

jest.mock("@/services/queries", () => {
  return {
    useOpenWeatherCurrentResponseQuery: () => {
      return {
        data: OpenWeatherApiCurrentResponseMock,
        isLoading: false,
      };
    },
  };
});

describe("Weather", () => {
  afterEach(() => {
    cleanup();
  });

  const props = {
    data: OpenWeatherApiCurrentResponseMock,
  };
  it("renders without error", () => {
    const { baseElement } = render(<ForeCast />);

    expect(baseElement).toBeTruthy();
  });

  it("renders an image with with the icon as url", () => {
    render(<ForeCast />);
    const imageElement = screen.queryByTestId("weather-image");
    expect(imageElement?.getAttribute("src")).toContain(
      props.data.current.weather[0].icon
    );
  });

  it("renders the high temperature and low temperature", () => {
    render(<ForeCast />);
    const highTempText = screen.queryByTestId("high-temp-text");
    const lowTempText = screen.queryByTestId("low-temp-text");

    expect(highTempText?.innerHTML).toBe(`H: ${formatTemperature(276)}`);
    expect(lowTempText?.innerHTML).toBe(`L: ${formatTemperature(0)}`);
  });

  it("renders the main temperature", () => {
    render(<ForeCast />);
    const tempElement = screen.queryByTestId("temp-text");

    expect(tempElement?.innerHTML).toBe(
      `${formatTemperature(props.data.current.temp)}`
    );
  });
});

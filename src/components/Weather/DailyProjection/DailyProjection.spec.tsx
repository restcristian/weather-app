import { cleanup, render } from "@testing-library/react";
import DailyProjection from "@/components/Weather/DailyProjection";
import { OpenWeatherApiCurrentResponseMock } from "@/__mocks__";

describe("DailyProjection", () => {
  afterEach(() => {
    cleanup();
  });

  const props = {
    daily: OpenWeatherApiCurrentResponseMock.daily,
  };
  it("renders without error", () => {
    const { baseElement } = render(<DailyProjection {...props} />);
    expect(baseElement).toBeTruthy();
  });
});

import { render, screen, act } from "@testing-library/react";
import Home from "@/pages";

describe("Home", () => {
  it("renders a title with Hello World", async () => {
    await act(async () => {
      const { baseElement } = render(<Home />);
      expect(baseElement).toBeTruthy();
    });
    expect(screen.queryByTestId("title")?.innerHTML).toContain("Hello World");
  });
});

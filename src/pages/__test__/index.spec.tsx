import { render, screen } from "@testing-library/react";
import Home from "@/pages";

describe("Home", () => {
  it("renders a title with Hello World", () => {
    render(<Home />);

    const title = screen.getByTestId("title");

    expect(title.innerHTML).toContain("Hello World");
  });
});

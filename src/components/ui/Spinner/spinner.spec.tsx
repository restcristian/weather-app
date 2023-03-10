import { cleanup, render } from "@testing-library/react";
import Spinner from "@/components/ui/Spinner";

describe("Spinner", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders without error", () => {
    const { baseElement } = render(<Spinner />);
    expect(baseElement).toBeTruthy();
  });
});

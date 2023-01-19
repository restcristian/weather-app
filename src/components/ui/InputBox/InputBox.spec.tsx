import { cleanup, render, screen } from "@testing-library/react";
import InputBox from "@/components/ui/InputBox";

describe("Home", () => {
  afterEach(() => {
    cleanup();
  });
  const props = {
    value: "test",
    onChange: jest.fn(),
    placeholder: "test placeholder",
  };
  it("renders an input field", () => {
    const { baseElement } = render(<InputBox {...props} />);
    expect(baseElement).toBeTruthy();

    const inputElement = baseElement.querySelector("input");

    expect(inputElement).toBeTruthy();
  });
  it("renders an icon when given", () => {
    const newProps = { ...props, rightIcon: <span>test icon</span> };
    const { baseElement } = render(<InputBox {...newProps} />);
    expect(baseElement).toBeTruthy();
    const icon = screen.queryByText("test icon");
    expect(icon).toBeTruthy();
  });

  it("should not render an icon when is not given", () => {
    const { baseElement } = render(<InputBox {...props} />);
    expect(baseElement).toBeTruthy();
    const icon = screen.queryByText("test icon");
    expect(icon).toBeFalsy();
  });
});

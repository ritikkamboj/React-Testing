const { render, screen } = require("@testing-library/react");
import App from "./App"

test("test input ", () => {
  render(<App />)
  const input = screen.getByRole("textbox");
  expect(input).toBeInTheDocument();
  expect(input).toHaveValue("aashu");
  expect(input).toBeEnabled();

  // expect(input).toBeDisabled();
  expect(input).toHaveAttribute("id");
  expect(input).toHaveAttribute("data-test");
  expect(input).toHaveClass("test-style");
  expect(input).toHaveClass("dummy");

})

test("test negetive cases", () => {
  render(<App />);
  const btn = screen.getByRole("button");
  expect(btn).toBeInTheDocument()
  expect(btn).not.toHaveClass('btn')
  expect(btn).not.toHaveAttribute('id')

})
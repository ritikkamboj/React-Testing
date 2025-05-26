const { render, screen } = require("@testing-library/react")
import App from "./App"

test("text match with string", () => {
  render(<App />)
  const div = screen.getByText("Hello World", { exact: false });
  expect(div).toBeInTheDocument();
})

test("text case with regex", () => {
  render(<App />)
  // const div = screen.getByText(/hello/i);
  const div = screen.getByText(/hello w?orld/i);
  expect(div).toBeInTheDocument();
})
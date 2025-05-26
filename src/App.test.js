const { render, screen } = require("@testing-library/react")
import App from "./App"

test("testing of button with title", () => {
  render(<App />)
  const btn = screen.getByTitle("click");
  expect(btn).toBeInTheDocument();
})


test("testing of span tag", () => {
  render(<App />)
  const span = screen.getAllByTitle("spade");

  for (let i = 0; i < span.length; i++) {
    expect(span[i]).toBeInTheDocument();
  }
})
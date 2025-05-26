const { render, screen } = require("@testing-library/react")
import App from "./App"

// test("testing of image tag  with Alt", () => {
//   render(<App />)
//   const btn = screen.getByAltText("dummy image");
//   expect(btn).toBeInTheDocument();
// })


test("testing of span tag", () => {
  render(<App />)
  const span = screen.getAllByAltText("dummy image");

  for (let i = 0; i < span.length; i++) {
    expect(span[i]).toBeInTheDocument();
  }
})
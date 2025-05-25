const { render, screen } = require("@testing-library/react")
import App from "./App"

test("testing on the basis of testId", () => {

  render(<App />)
  const div = screen.getAllByTestId("div-test-id")
  for (let i = 0; i < div.length; i++) {
    expect(div[i]).toBeInTheDocument();

  }
})

test("testing on the basis of testId for h2", () => {

  render(<App />)
  const h2 = screen.getByTestId("h2-test-id")
  expect(h2).toBeInTheDocument();

})
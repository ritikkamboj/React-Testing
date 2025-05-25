const { render, screen } = require("@testing-library/react")
import App from "./App"

test("getByLabelText", () => {
  render(<App />)
  const input = screen.getByLabelText("username")
  expect(input).toBeInTheDocument();
  expect(input).toHaveValue("aashu")
})



test("getByLabelText 2", () => {
  render(<App />)
  const checkbox = screen.getByLabelText("skills")
  expect(checkbox).toBeInTheDocument()

})
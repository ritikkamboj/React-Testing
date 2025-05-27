import { render, screen } from "@testing-library/react"
import App from "./App"



test("test handler", () => {
  render(<App />);
  const el = screen.getByRole("heading")
  expect(el).toBeInTheDocument();
})

test("render test for mock api testing ", async () => {
  render(<App />)
  const el = await screen.findAllByRole("listitem")
  expect(el).toHaveLength(4)

})
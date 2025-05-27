import { prettyDOM, render, screen } from "@testing-library/react"
import App from "./App"

test("testing component", () => {
  const { container, debug } = render(<App />)
  // const el = screen.getByText("heading 2")
  // expect(el).toBeInTheDocument();
  // console.log(prettyDOM(container))
  debug();



})
const { render, screen } = require("@testing-library/react")
import App from "./App"


test("test match with function", () => {
  render(<App />)
  // const div = screen.getByText((content, element) => content.startsWith("Hello"))
  // const div = screen.getByText((content, element) => content.endsWith("World"))
  const div = screen.getByText((content, element) => {

    return content.length == 11
  })
  expect(div).toBeInTheDocument();
})
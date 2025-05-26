const { render, screen, configure } = require("@testing-library/react")
import App from "./App"
configure({ testIdAttribute: "element-id" })



test("test div with data test id ", () => {
  render(<App />)
  const div = screen.getByTestId("test-div")
  expect(div).toBeInTheDocument();

})
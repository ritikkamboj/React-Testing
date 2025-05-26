const { render, screen } = require("@testing-library/react")
import App from "./App"

test("query by test case", () => {
  render(<App />)
  // const div = screen.getByText("login");
  const div = screen.queryByText("login")  // thiis check that code is present in the document 
  expect(div).not.toBeInTheDocument();
})
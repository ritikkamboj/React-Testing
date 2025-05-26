const { render } = require("@testing-library/react")
import App from "./App"

test("test case with custom query ", () => {
  render(<App />)
  const ele = document.querySelector("#testId");
  expect(ele).toBeInTheDocument();
})
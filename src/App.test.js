const { render, screen, within } = require("@testing-library/react")
import App from './App'

test("test with within function", () => {
  render(<App />)
  const ele = screen.getByText('hello world');
  let subel = within(ele).getByText("hi")

  expect(ele).toBeInTheDocument();
  expect(subel).toBeInTheDocument()

})
const { render, screen } = require("@testing-library/react")
import App from "./App"

// test("test case for single input field placeholder", () => {
//   render(<App />)
//   const input = screen.getByPlaceholderText("enter username");
//   expect(input).toBeInTheDocument();
//   expect(input).toHaveValue()
// })


test("test case for mutiple input field placeholder", () => {
  render(<App />)
  const inputs = screen.getAllByPlaceholderText('enter username')
  for (let i = 0; i < inputs.length; i++) {
    expect(inputs[i]).toBeInTheDocument()
    expect(inputs[i]).toHaveValue('ak')

  }
})
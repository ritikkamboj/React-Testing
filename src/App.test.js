const { render, screen } = require("@testing-library/react")
import App from "./App"

// test("testing by display Value ", () => {
//   render(<App />)
//   const input = screen.getByDisplayValue("aashu");
//   expect(input).toBeInTheDocument()
// })


test("testing by testarea  Value ", () => {
  render(<App />)
  const textarea = screen.getAllByDisplayValue("aashu");

  // we can check the all values by using array 

  expect(textarea[0]).toBeInTheDocument()
})


test("testing by radio  Value ", () => {
  render(<App />)
  const radio = screen.getByDisplayValue("male");
  expect(radio).toBeInTheDocument()
})
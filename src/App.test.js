const { render, screen } = require("@testing-library/react")
import App from "./App"

test("single button testing", () => {
  render(<App />)
  const btn = screen.getByText("login")
  expect(btn).toBeInTheDocument();
})


test("single p tag testing ", () => {
  render(<App />)
  const tag = screen.getByText("p tag testing")
  expect(tag).toBeInTheDocument();
})

// test("single heading tag testing ", () => {
//   render(<App />)
//   const tag = screen.getByText("heading")
//   expect(tag).toBeInTheDocument();
// })


// we check class on by using  "toHaveClass()" toHaveAttribute

test("multiple heading tag testing ", () => {
  render(<App />)
  const tag = screen.getAllByText("heading")
  for (let i = 0; i < tag.length; i++) {
    expect(tag[i]).toBeInTheDocument();
  }

})
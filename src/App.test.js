import { fireEvent, render, screen } from "@testing-library/react"
import App from "./App"
import dbClean from "./dbClean"

// beforeAll(() => {
//   console.log("**** beforeall hook****")
// })

beforeEach(() => {
  // console.log("****beforeEach hook*****")
  dbClean();
})

test("click event test case 1", () => {
  console.log("this is 1 ")
  render(<App />)
  const btn = screen.getByRole("button");
  fireEvent.click(btn);
  expect(screen.getByText("updated data")).toBeInTheDocument();

})


test("click event test case 2", () => {
  console.log("this is 2 ")

  render(<App />)
  const btn = screen.getByRole("button");
  fireEvent.click(btn);
  expect(screen.getByText("updated data")).toBeInTheDocument();

})

test("click event test case 3", () => {
  console.log("this is 3 ")

  render(<App />)
  const btn = screen.getByRole("button");
  fireEvent.click(btn);
  expect(screen.getByText("updated data")).toBeInTheDocument();

})

// afterAll(() => {
//   console.log("**** afterAll hook")
// })


// afterEach(() => {
//   console.log("**** afterEach hook")
// })
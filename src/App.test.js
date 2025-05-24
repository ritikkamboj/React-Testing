import { render, screen } from "@testing-library/react";
import App from "./App";

test("testing the first react app", () => {
  render(<App />);
  const text = screen.getByText(/First react Test case/i);
  const text2 = screen.getByText(/ritik kamboj/i);

  const title = screen.getByTitle("Any image deatils")
  expect(text).toBeInTheDocument();
  expect(text2).toBeInTheDocument();
  expect(title).toBeInTheDocument();
})

test("Testing of input box", () => {
  render(<App />);

  let checkInput = screen.getByRole("textbox")
  let checkInputPlaceholder = screen.getByPlaceholderText("Enter username")
  expect(checkInput).toBeInTheDocument();
  expect(checkInputPlaceholder).toBeInTheDocument()
  expect(checkInput).toHaveAttribute("name", "username")
  expect(checkInput).toHaveAttribute("id", "userid")
  expect(checkInput).toHaveAttribute("type", "text")
  expect(checkInput).toHaveAttribute("value", "aashu")
})

describe.skip("UI test case group", () => {

  test("test case 1 ", () => {
    render(<App />);
    let checkInput = screen.getByRole("textbox")
    expect(checkInput).toHaveAttribute("name", "username")
  })
  test("test case 2 ", () => {
    render(<App />);
    let checkInput = screen.getByRole("textbox")
    expect(checkInput).toHaveAttribute("name", "username")
  })
  test("test case 3 ", () => {
    render(<App />);
    let checkInput = screen.getByRole("textbox")
    expect(checkInput).toHaveAttribute("name", "username")
  })
})

describe("API test case", () => {

  test("API test case1", () => {
    render(<App />);
    let checkInput = screen.getByRole("textbox")
    expect(checkInput).toHaveAttribute("name", "username")
  })
  test("API test case 2", () => {
    render(<App />);
    let checkInput = screen.getByRole("textbox")
    expect(checkInput).toHaveAttribute("name", "username")
  })
  test("API test case 3", () => {
    render(<App />);
    let checkInput = screen.getByRole("textbox")
    expect(checkInput).toHaveAttribute("name", "username")
  })
  describe("Inner describe or nested describe", () => {
    test("API test case shree", () => {
      render(<App />);
      let checkInput = screen.getByRole("textbox")
      expect(checkInput).toHaveAttribute("name", "username")
    })
  })
})
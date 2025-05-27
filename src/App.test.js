import { render, screen } from "@testing-library/react"
import User from "./User"


test("testing of props in component", () => {
  render(<User name="aashu" />)
  const user = screen.getByText("aashu");
  expect(user).toBeInTheDocument();
})
const { render, screen } = require("@testing-library/react")
import userEvent from "@testing-library/user-event"
import App from "./App"

test("on change event testing", async () => {
  userEvent.setup();
  render(<App />)
  const el = screen.getByRole("textbox");
  await userEvent.type(el, "aashu");
  expect(screen.getByText("aashu")).toBeInTheDocument();

})
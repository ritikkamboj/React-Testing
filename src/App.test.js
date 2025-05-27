const { render, screen } = require("@testing-library/react");
const { default: userEvent } = require("@testing-library/user-event")
import App from "./App"

test("click event with user event library", async () => {
  userEvent.setup();
  render(<App />)
  const btn = screen.getByText("click me")
  await userEvent.click(btn);
  expect(screen.getByText("hello")).toBeInTheDocument();
})
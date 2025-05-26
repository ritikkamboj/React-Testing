const { render, screen } = require("@testing-library/react")

import App from "./App"

test("test element with find by", async () => {
  render(<App />)
  const el = await screen.findByText("data found", {}, { timeout: 4000 });
  expect(el).toBeInTheDocument();
})
const { render, screen } = require("@testing-library/react")
import App from "./App"


test("test getAllByRole", () => {
  render(<App />)

  const buttons = screen.getAllByRole("button");
  const options = screen.getAllByRole("option")
  // expect(buttons).toBeInTheDocument();
  for (let i = 0; i < buttons.length; i++) {
    expect(buttons[i]).toBeInTheDocument();


  }
  for (let i = 0; i < options.length; i++) {
    expect(options[i]).toBeInTheDocument();


  }

})
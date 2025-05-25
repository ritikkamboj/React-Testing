const { render, screen } = require("@testing-library/react")
import App from "./App"


test("input test case ", () => {
  render(<App />)
  const inputs = screen.getAllByLabelText("username");


  for (let i = 0; i < inputs.length; i++) {
    expect(inputs[i]).toBeInTheDocument();
    expect(inputs[i]).toHaveValue("anil");
  }
})


test("input test case for check box ", () => {
  render(<App />)
  const checkboxes = screen.getAllByLabelText("skill");


  for (let i = 0; i < checkboxes.length; i++) {
    expect(checkboxes[i]).toBeInTheDocument();
    expect(checkboxes[i]).toBeChecked();
  }
})
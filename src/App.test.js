import { render } from "@testing-library/react";
import App from "./App";

test("snapshot for app componenet file ", () => {
  let box = render(<App />);
  expect(box).toMatchSnapshot()
})
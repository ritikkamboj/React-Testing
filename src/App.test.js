import Users from "./Users";
// import { render } from "@testing-library/react";
import renderer from "react-test-renderer"

test("class compoentn method testing", () => {

  const testRenderer = renderer.create(<Users />, { unstable_isConcurrent: false });
  const compData = testRenderer.getInstance();
  console.log("jai shree ram 🌺:", compData);
  expect(compData.getUserList()).toMatch("user list");

})
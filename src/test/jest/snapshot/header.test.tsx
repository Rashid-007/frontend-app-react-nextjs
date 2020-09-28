	
import React from "react";
import renderer from "react-test-renderer";

import Index from "../../../main/pages/index";

describe("Login", () => {
  it("renders the h1 title", () => {
    const index = renderer.create(<Index />).toJSON();
    expect(index).toMatchSnapshot();
  });
})
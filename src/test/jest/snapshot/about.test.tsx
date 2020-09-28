import React from "react";
import renderer from "react-test-renderer";
import About from "../../../main/pages/about";

describe("About content test", () => {
    it("test link", () => {
        const about = renderer.create(<About/>).toJSON;
        expect(about).toMatchSnapshot();
    });
})
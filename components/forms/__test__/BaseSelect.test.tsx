import React from "react";
import { render } from "@testing-library/react";

import BaseSelect from "../BaseSelect";



describe("BaseSelect", () => {


    it("it should render", () => {
        const { container } = render(<BaseSelect />);
        expect(container.querySelector("#base-select")).toBeTruthy();
    })

})
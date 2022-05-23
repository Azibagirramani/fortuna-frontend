import React from 'react';
import { render } from '@testing-library/react';

import BaseButton from '../BaseButton';

describe('BaseButton', () => {
    it('should render correctly', () => {
        const { container } = render(<BaseButton />);
        expect(container).toMatchSnapshot();
    });

    it('Should render with label in it', () => {
        const label: string = "Test Label";
        const { getAllByText } = render(<BaseButton>{label}</BaseButton>);
        expect(getAllByText(label)).toBeTruthy();
    });

    it("should display spinner when loading", () => {
        const isLoading: boolean = true;
        const { container } = render(<BaseButton loading={isLoading} />);
        expect(container.querySelector("#spinner")).toBeTruthy();
    });

    it("should receive all props", () => {

        const label: string = "Test Label";
        const disabled: boolean = true;
        const type: string = "submit";
        const onClick: () => void = () => { };
        const exClass: string = "test-class";
        const buttonId = "test-id";
        const { container } = render(<BaseButton id={buttonId} disabled={disabled} type={type} onClick={onClick} exClass={exClass}>{label}</BaseButton>);

        expect(container.querySelector(`#${buttonId}`)).toBeTruthy();
        expect(container.querySelector(`#${buttonId}`)).toHaveAttribute("id", buttonId);
        expect(container.querySelector(`#${buttonId}`)).toHaveAttribute("type", "submit");
        expect(container.querySelector(`#${buttonId}`)).toHaveAttribute("class", `py-5 xl:w-fit lg:w-full md:w-fit px-5 mr-2 text-sm font-medium text-white bg-secondary rounded shadow drop-shadow-sm test-class`);
        expect(container.querySelector(`#${buttonId}`)).toHaveTextContent(label);
    })


}
);
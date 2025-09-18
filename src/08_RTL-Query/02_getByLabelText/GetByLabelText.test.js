import { render, screen } from '@testing-library/react';
import GetByLabelText from './GetByLabelText';

// test("getByLabelText testing", ()=> {
//     render(<GetByLabelText />);
//     const input = screen.getByLabelText("Username");
//     expect(input).toBeInTheDocument();
//     expect(input).toHaveValue("hello");
// })

// test("getByLabelText testing2", ()=> {
//     render(<GetByLabelText />);
//     const checkbox = screen.getByLabelText("Skills");
//     expect(checkbox).toBeInTheDocument();
// })


test("getAllByLabelText testing", ()=> {
    render(<GetByLabelText />);
    const inputs = screen.getAllByLabelText("Username");
    for(let i=0; i<inputs.length; i++) {
        expect(inputs[i]).toBeInTheDocument();
        expect(inputs[i]).toHaveValue("hello");
    }
});
import { render, screen } from '@testing-library/react';
import GetByPlaceholderText from './GetByPlaceholderText';


// test("getByPlaceholderText testing", ()=> {
//     render(<GetByPlaceholderText />);
//     const input = screen.getByPlaceholderText("enter username");
//     expect(input).toBeInTheDocument();
// });


test("getAllByPlaceholderText testing", ()=> {
    render(<GetByPlaceholderText />);
    const inputs = screen.getAllByPlaceholderText("enter username");
    for(let i=0; i<inputs.length; i++) {
        expect(inputs[i]).toBeInTheDocument();
    }
})
import { render, screen } from '@testing-library/react';
import GetByDisplayValue from './GetByDisplayValue';


test("testing with display value", ()=> {
    render(<GetByDisplayValue />);
    const input = screen.getByDisplayValue("hello");
    expect(input).toBeInTheDocument();
});

test("textarea testing with display value", ()=> {
    render(<GetByDisplayValue />);
    const textarea = screen.getByDisplayValue("hello world");
    expect(textarea).toBeInTheDocument();
});

test("radio testing with display value", ()=> {
    render(<GetByDisplayValue />);
    const radioInput = screen.getByDisplayValue("male");
    expect(radioInput).toBeInTheDocument(); 
});

test("testing with display multiple values", ()=> {
    render(<GetByDisplayValue />);
    const inputs = screen.getAllByDisplayValue("multiplehello");
    for(let i=0; i<inputs.length; i++) {
        expect(inputs[i]).toBeInTheDocument(); 
    }
});
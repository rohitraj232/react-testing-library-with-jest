import { render, screen } from '@testing-library/react';
import GetByTitle from './GetByTitle';


test("button testing with title attribute", ()=> {
    render(<GetByTitle />);
    const btn = screen.getByTitle("click");
    expect(btn).toBeInTheDocument();
});

test("span testing with title attribute", ()=> {
    render(<GetByTitle />);
    const span = screen.getAllByTitle("icon");
    for(let i=0; i<span.length; i++) {
        expect(span[i]).toBeInTheDocument();
    }
});
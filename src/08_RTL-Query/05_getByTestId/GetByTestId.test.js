import { render, screen } from '@testing-library/react';
import GetByTestId from './GetByTestId';


test("getByTestId testing", ()=> {
    render(<GetByTestId />);
    const divId = screen.getByTestId("test1");
    expect(divId).toBeInTheDocument();
});

test("getByTestId testing multiple id", ()=> {
    render(<GetByTestId />);
    const divIds = screen.getAllByTestId("test5");
    for(let i=0; i<divIds.clientHeight; i++) {
        expect(divIds[i]).toBeInTheDocument();
    }
});

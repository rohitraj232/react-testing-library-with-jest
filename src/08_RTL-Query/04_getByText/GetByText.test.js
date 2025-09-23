import { render, screen } from '@testing-library/react';
import GetByText from './GetByText';


// test("getByText testing btn", ()=> {
//     render(<GetByText />);
//     const btn = screen.getByText("Login");
//     expect(btn).toBeInTheDocument();
// });

// test("getByText testing paragraph", ()=> {
//     render(<GetByText />);
//     const pTag = screen.getByText("p tag");
//     expect(pTag).toBeInTheDocument();
//     expect(pTag).toHaveClass("c1");
//     expect(pTag).toHaveAttribute("id1");
// });

// test("getByText testing h1", ()=> {
//     render(<GetByText />);
//     const h1Tag = screen.getByText("Heading Tag");
//     expect(h1Tag).toBeInTheDocument();
// });


test("getByText testing h1 multiple", ()=> {
    render(<GetByText />);
    const h1Tag = screen.getAllByText("Heading Tag");
    for(let i=0; i<h1Tag.length; i++) {
        expect(h1Tag[i]).toBeInTheDocument();
    }
}); 
import { render, screen } from '@testing-library/react';
import GetByAltText from './GetByAltText';


test("test image element with alt", ()=> {
    render(<GetByAltText />);
    const imageAlt = screen.getByAltText("image");
    expect(imageAlt).toBeInTheDocument();
});

test("test multiple image element with alt", ()=> {
    render(<GetByAltText />);
    const imageAlt = screen.getAllByAltText("image1");
    for(let i=0; i<imageAlt.length; i++) {
        expect(imageAlt[i]).toBeInTheDocument();
    }
});
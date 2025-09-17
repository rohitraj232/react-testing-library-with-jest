import { fireEvent, render, screen } from '@testing-library/react'
import FunctionalComponent from './FunctionalComponent';

test("Functional Component method testing", () => {
    render(<FunctionalComponent />);
    const button = screen.getByTestId("btn1");
    fireEvent.click(button);
    expect(screen.getByText("hello")).toBeInTheDocument();
});
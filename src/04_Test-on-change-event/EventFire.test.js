import { fireEvent, render, screen } from '@testing-library/react';
import EventFire from './EventFire';

// Test1
test("on change event testing", () => {
  render(<EventFire />);
  let input = screen.getByRole("textbox");
  fireEvent.change(input, {target:{value:'abc'}});
  expect(input.value).toBe("abctest");
})


// Test2
test("click event test case", () => {
    render(<EventFire />);
    const btn = screen.getByRole("button");
    fireEvent.click(btn);
    expect(screen.getByText("updated data")).toBeInTheDocument();
})
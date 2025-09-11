import { render, screen } from '@testing-library/react';
import ReactBasic from './ReactBasic';


// react basic text test
test("01 Test First React App case",() => {
  render(<ReactBasic/>)
  const text = screen.getByText(/First React Test Case/i);
  expect(text).toBeInTheDocument();
})


// basic input box testing
test("02 Test Input", () => {
  render(<ReactBasic />);
  const input= screen.getByRole("textbox");
  const checkInputPlaceholder = screen.getByPlaceholderText("Enter User Name");
  expect(input).toBeInTheDocument();
  expect(checkInputPlaceholder).toBeInTheDocument();
  expect(input).toHaveAttribute("name", "username");
  expect(input).toHaveAttribute("id", "userid");
  expect(input).toHaveAttribute("type", "text");
})
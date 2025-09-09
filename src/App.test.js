// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

// test("Test First React App case",() => {
//   render(<App/>)
//   const text = screen.getByText(/First React Test Case/i);
//   expect(text).toBeInTheDocument();
// })

// test("Test Input", () => {
//   render(<App />);
//   const input= screen.getByRole("textbox");
//   const checkInputPlaceholder = screen.getByPlaceholderText("Enter User Name");
//   expect(input).toBeInTheDocument();
//   expect(checkInputPlaceholder).toBeInTheDocument();
//   expect(input).toHaveAttribute("name", "username");
//   expect(input).toHaveAttribute("id", "userid");
//   expect(input).toHaveAttribute("type", "text");
// })


// describe.only("UI test case group", () => {

//   test("test case 1", () => {
//     render(<App />);
//     let checkInput = screen.getByRole("textbox");
//     expect(checkInput).toHaveAttribute("name", "username");
//   })

//   test("test case 2", () => {
//     render(<App />);
//     let checkInput = screen.getByRole("textbox");
//     expect(checkInput).toHaveAttribute("name", "username");
//   })

//   test("test case 3", () => {
//     render(<App />);
//     let checkInput = screen.getByRole("textbox");
//     expect(checkInput).toHaveAttribute("name", "username");
//   })

// })


// describe.skip("API UI test case group", () => {

//   test("api test case 1", () => {
//     render(<App />);
//     let checkInput = screen.getByRole("textbox");
//     expect(checkInput).toHaveAttribute("name", "username");
//   })

//   test("api test case 2", () => {
//     render(<App />);
//     let checkInput = screen.getByRole("textbox");
//     expect(checkInput).toHaveAttribute("name", "username");
//   })

//   test("api test case 3", () => {
//     render(<App />);
//     let checkInput = screen.getByRole("textbox");
//     expect(checkInput).toHaveAttribute("name", "username");
//   })

//   describe("inner describe test group", () => {
//     test("api test case 3", () => {
//       render(<App />);
//       let checkInput = screen.getByRole("textbox");
//       expect(checkInput).toHaveAttribute("name", "username");
//     })
//   })

// })


test("on change event testing", () => {
  render(<App />);
  let input = screen.getByRole("textbox");
  fireEvent.change(input, {target:{value:"abc"}});
  expect(input.value).toBe("abctest");
})
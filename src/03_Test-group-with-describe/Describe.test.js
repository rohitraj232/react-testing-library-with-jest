import { render, screen } from '@testing-library/react';
import Describe from './Describe';


describe.only("UI test case group", () => {

  test("test case 1", () => {
    render(<Describe />);
    let checkInput = screen.getByRole("textbox");
    expect(checkInput).toHaveAttribute("name", "username");
  })

  test("test case 2", () => {
    render(<Describe />);
    let checkInput = screen.getByRole("textbox");
    expect(checkInput).toHaveAttribute("name", "username");
  })

  test("test case 3", () => {
    render(<Describe />);
    let checkInput = screen.getByRole("textbox");
    expect(checkInput).toHaveAttribute("name", "username");
  })

})


describe.skip("API UI test case group", () => {

  test("api test case 1", () => {
    render(<Describe />);
    let checkInput = screen.getByRole("textbox");
    expect(checkInput).toHaveAttribute("name", "username");
  })

  test("api test case 2", () => {
    render(<Describe />);
    let checkInput = screen.getByRole("textbox");
    expect(checkInput).toHaveAttribute("name", "username");
  })

  test("api test case 3", () => {
    render(<Describe />);
    let checkInput = screen.getByRole("textbox");
    expect(checkInput).toHaveAttribute("name", "username");
  })

  describe("inner describe test group", () => {
    test("api test case 3", () => {
      render(<Describe />);
      let checkInput = screen.getByRole("textbox");
      expect(checkInput).toHaveAttribute("name", "username");
    })
  })

})
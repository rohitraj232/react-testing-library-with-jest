import {render, screen} from "@testing-library/react"
import GetByRole from "./GetByRole";

// test("getByRole test", ()=> {
//     render(<GetByRole />);
//     const input = screen.getByRole("textbox");
//     const btn = screen.getByRole("button");
//     expect(input).toBeInTheDocument();
//     expect(input).toHaveValue("hello");
//     expect(btn).toBeInTheDocument();
// });


// test("multiple role", ()=> {
//     render(<GetByRole />);
//     const btn1 = screen.getByRole("button", {name: "Click 1"})
//     const btn2 = screen.getByRole("button", {name: "Click 2"})
//     const input1 = screen.getByRole("textbox", {name: "User Name"});
//     const input2 = screen.getByRole("textbox", {name: "Course Name"});
//     const dv1 = screen.getByRole('dv1');
//     expect(btn1).toBeInTheDocument();
//     expect(btn2).toBeInTheDocument();
//     expect(input1).toBeInTheDocument();
//     expect(input2).toBeInTheDocument();
//     expect(dv1).toBeInTheDocument();
// })

test("getAllByRole Query", ()=> {
    render(<GetByRole />);
    const btns = screen.getAllByRole("button");
    for(let i=0; i<=btns.length; i++) {
        expect(btns[i]).toBeInTheDocument();
    }
})
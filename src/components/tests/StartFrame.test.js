
import { render ,fireEvent, getByTestId } from "@testing-library/react"
import React from "react"
import StartFrame from "../StartFrame";

describe('Testing start frame' ,()=>{

test('Will start frame render?',()=>{
const {getByText} = render(<StartFrame/>);
getByText("PetHub");
});

// test('Will start frame render with error?',()=>{
//     const {getByText,getByTestId} = render(<StartFrame/>);
//     const submitButtonNode = getByText("➜");
//     const inputNode = getByTestId('username');
//     fireEvent.change(inputNode,{target:{value:' '}})
//     fireEvent.click(submitButtonNode);
//     getByText('Error .. try again');
//     });

});
import PetAction from "../PetAction"

import { render,fireEvent } from "@testing-library/react"
import React from "react"

describe('Testing pet action' ,()=>{
test('Will pet action render a pet button?',()=>{
const {getByText} = render(<PetAction/>);
getByText("🐶");

});
});
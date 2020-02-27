import HitAction from "../HitAction"

import { render,fireEvent } from "@testing-library/react"
import React from "react"

describe('Testing hit action' ,()=>{

test('Will hit action render a hit button?',()=>{
const {getByText} = render(<HitAction/>);
getByText("💥");

})
})
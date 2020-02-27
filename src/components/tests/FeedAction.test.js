import FeedAction from "../FeedAction"

import { render,fireEvent } from "@testing-library/react"
import React from "react"

describe('Testing feed action' ,()=>{

test('Will feed action render a feed button?',()=>{
const {getByText} = render(<FeedAction/>);
getByText("🍪");

});
});
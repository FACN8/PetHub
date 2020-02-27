
import { render } from "@testing-library/react"
import React from "react"
import EndFrame from "../EndFrame";

describe('Testing end frame' ,()=>{

test('Will end frame render?',()=>{
const {getByText} = render(<EndFrame
setHealth={()=>true}
setHunger={()=>true}
setUserData={()=>true}
/>);
getByText("Game Over!");
});

test('Will end frame remove items from localStorage?',()=>{
    localStorage.setItem('alive','yes');
    localStorage.setItem('health',33);
    localStorage.setItem('hunger',55);
    const {getByText} = render(<EndFrame
    setHealth={()=>true}
    setHunger={()=>true}
    setUserData={()=>true}
    />);
    expect(localStorage.getItem('alive')).not.toBe('yes');
    expect(localStorage.getItem('health')).not.toBe(33);
    expect(localStorage.getItem('hunger')).not.toBe(55);
    });

});
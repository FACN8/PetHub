
import { render } from "@testing-library/react"
import React from "react"
import HungerBar from "../HungerBar";

describe('Testing health bar' ,()=>{

test('Will hunger bar render?',()=>{
const {getByText} = render(<HungerBar/>);
getByText("🍪");
});

test('Will hunger bar render with certain hp ?',()=>{
    const {getByText} = render(<HungerBar hunger={50}/>);
    const barNode = getByText("🍪");
    expect(barNode.style.width).toBe('50%')
    });

});
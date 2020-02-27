
import { render } from "@testing-library/react"
import React from "react"
import HealthBar from "../HealthBar";

describe('Testing health bar' ,()=>{

test('Will health bar render?',()=>{
const {getByText} = render(<HealthBar/>);
getByText("💟");
});

test('Will health bar render with certain hp ?',()=>{
    const {getByText} = render(<HealthBar health={50}/>);
    const barNode = getByText("💟");
    expect(barNode.style.width).toBe('50%')
    });

});
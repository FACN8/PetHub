
import { render } from "@testing-library/react"
import React from "react"
import PetFrame from "../PetFrame";

describe('Testing pet frame' ,()=>{

test('Will pet frame render with a name?',()=>{
const {getByText} = render(<PetFrame userData={{name:'Najwan'}}/>);
getByText("Najwan");
});

test('Will pet frame render with no name but a login?',()=>{
    const {getByText} = render(<PetFrame userData={{login:'theNajwan'}}/>);
    getByText("theNajwan");
    });

});
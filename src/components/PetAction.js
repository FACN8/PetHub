import React from "react"


const PetAction = ({setHealth}) =>{
const pet = ()=>{
    setHealth(health=>{
    let newHealth = health + 3;
    if(newHealth>100)
      return 100;
        
    return newHealth;
    })
}
    return (
        <div onClick={pet} className="button button--b">
        Pet
        </div>
    );
}

export default PetAction;
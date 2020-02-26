import React from "react"


const PetAction = ({ setHealth }) => {
    const style = {
        "fontSize": "4rem"
    };

    const pet = () => {
        setHealth(health => {
            let newHealth = health + 3;
            if (newHealth > 100)
                return 100;

            return newHealth;
        })
    }
    return (
        <div onClick={pet} className="button" style={style}>
            🐶
        </div>
    );
}

export default PetAction;
import React from "react"


const PetAction = ({ setHealth, setStatus }) => {
    const style = {
        "fontSize": "4rem"
    };

    const pet = () => {

        setStatus("🐶");

        setHealth(health => {
            let newHealth = health + 1;

            if (newHealth > 100) {
                return 100;
            }

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
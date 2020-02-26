import React from "react"


const HitAction = ({ setHealth }) => {
    const hit = () => {

        setHealth(health => {
            let newHealth = health - 6;
            if (newHealth < 0)
                return 0;

            return newHealth;
        });
    };

    return (
        <div onClick={hit} className="button button--c">
            Hit
        </div>
    );
}

export default HitAction;
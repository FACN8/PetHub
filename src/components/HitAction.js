import React from "react"


const HitAction = ({ setHealth }) => {
    const style = {
        "font-size": "4rem",
        "padding-bottom": "1.7rem"
    };

    const hit = () => {

        setHealth(health => {
            let newHealth = health - 6;
            if (newHealth < 0)
                return 0;

            return newHealth;
        });
    };

    return (
        <div onClick={hit} className="button" style={style}>
            💥
        </div>
    );
}

export default HitAction;
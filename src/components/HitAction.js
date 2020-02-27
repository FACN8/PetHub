import React from "react"


const HitAction = ({ setHealth, setStatus }) => {
    const style = {
        "fontSize": "4rem",
        "paddingBottom": "1.7rem"
    };

    const hit = () => {

        setStatus("💥");

        document.querySelector('#emoji').classList.add('animate');

        setTimeout(() => {
            if (document.querySelector('#emoji'))
                document.querySelector('#emoji').classList.remove('animate');
        }, 110);

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
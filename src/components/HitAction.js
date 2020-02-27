import React from "react"
import useAudio from "./useAudio"


const HitAction = ({ setHealth, setStatus }) => {
  const [playing , toggle]=useAudio('/audio/Single-yard-dog-woof.mp3')
    const style = {
        "fontSize": "4rem",
        "paddingBottom": "1.7rem"
    };

    const hit = () => {

        toggle()
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
        <div onClick={hit} className="button" style={style} >
            💥 
        </div>
    );
}

export default HitAction;
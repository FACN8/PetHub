import React from "react"
import useAudio from "./useAudio"


const FeedAction = ({ setHunger, setStatus }) => {
    const [playing , toggle]=useAudio('/audio/dog_drinking.mp3')

    const style = {
        "fontSize": "4rem",
        "paddingBottom": "1.7rem"
    };

    const feed = () => {
        toggle()

        setStatus("🍪");

        document.querySelector('#emoji').classList.add('animate');

        setTimeout(() => {
            if (document.querySelector('#emoji'))
                document.querySelector('#emoji').classList.remove('animate');
        }, 110);

        setHunger(hunger => {
            let newHunger = +hunger + 2;

            if (newHunger > 100) {
                return 100;
            }

            return newHunger;

        })

    }
    return (
        <div onClick={feed} className="button" style={style} >
            🍪
        </div>
    );
}

export default FeedAction;
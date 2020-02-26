import React from "react"


const FeedAction = ({ setHunger }) => {
    const style = {
        "font-size": "4rem",
        "padding-bottom": "1.7rem"
    };

    const feed = () => {
        setHunger(hunger => {
            let newHunger = hunger + 5;
            if (newHunger > 100)
                return 100;

            return newHunger;
        })
    }
    return (
        <div onClick={feed} className="button" style={style}>
            🍪
        </div>
    );
}

export default FeedAction;
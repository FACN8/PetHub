import React from "react"


const FeedAction = ({ setHunger, setStatus }) => {
    const style = {
        "fontSize": "4rem",
        "paddingBottom": "1.7rem"
    };

    const feed = () => {

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
        <div onClick={feed} className="button" style={style}>
            🍪
        </div>
    );
}

export default FeedAction;
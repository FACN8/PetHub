import React from "react";

const HungerBar = props => {
    let style = {
        "width": props.hunger + "%",
        "fontSize": "30px"
    };

    return (
        <div className="progress-hunger">
            <div className="bar" style={style}>🍪</div>
        </div>
    );
};

export default HungerBar;

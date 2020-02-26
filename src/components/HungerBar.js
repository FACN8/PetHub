import React from "react";

const HungerBar = props => {
    let style = {
        width: props.hunger + "%"
    };

    return (
        <div className="progress">
            <div className="bar" style={style}></div>
        </div>
    );
};

export default HungerBar;

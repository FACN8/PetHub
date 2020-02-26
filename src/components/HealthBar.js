import React from "react";

const HealthBar = props => {
    let style = {
        "width": props.health + "%",
        "font-size": "30px"
    };

    return (
        <div className="progress-health">
            <div className="bar" style={style}>💟</div>
        </div>
    );
};

export default HealthBar;
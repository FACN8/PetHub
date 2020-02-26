import React from "react";

const HealthBar = props => {
    let style = {
        "width": props.health + "%",
        "fontSize": "30px"
    };

    return (
        <div className="progress-health">
            <div className="bar" style={style}>💟</div>
        </div>
    );
};

export default HealthBar;
import React from "react";

const HealthBar = props => {
    let style = {
        width: props.health + "%"
    };

    return (
        <div className="progress">
            <div className="bar" style={style}></div>
        </div>
    );
};

export default HealthBar;
import React from "react";

const Display = ({ text = 0, clickHandler }) => {
    return (
        <div className="display" onClick={clickHandler ? clickHandler : null}>
            {text.toString().split(' ').reverse().join(' ')}
        </div >
    )
}

export default Display;
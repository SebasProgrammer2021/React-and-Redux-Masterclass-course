import React from "react";


export const Display = ({ text, clickHandler }) => {
    return (
        <div className="display" onClick={clickHandler ? clickHandler : null}>
            {text.toString().split(' ').reverse().join(' ')}
        </div >
    )
}

export default Display;
import React from "react";

function Block(props) {
    return (
        <div className={props.className} onClick={props.onClick}>
        </div>
    )
}

export default Block;
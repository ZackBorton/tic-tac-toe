import React from "react";

/*
* A presentational container to simply render a square
* */
export default function Square(props) {
    let classes;
    let base = "square ";
    if (props.value === "X")
        classes = base + "o-value";
    else
        classes = base + "x-value";
    return (
        <button className={classes} onClick={props.onClick}>
            {props.value}
        </button>
    );
}
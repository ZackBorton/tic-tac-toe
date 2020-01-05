import React from 'react';

export default function Header(props) {
    return (
        <header>
            <h1 className="header">{props.value}</h1>
        </header>
    )
}
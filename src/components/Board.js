import React from 'react';

function Square(props) {
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

export default class Board extends React.Component {
    renderSquare(i) {
        return (
            <Square
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
                <div className="board-row">
                    <button onClick={() => window.location.reload()}>Restart Game</button>
                </div>
            </div>
        );
    }
}
import React from 'react'

/*
* A presentational container to return the status of the game
*/
export function getGameStatus(props) {
    if (this.state.winner) return "Winner: ";
    if (this.state.stepNumber > 8) return "Draw: Restart match";
    return "Next player: " + (props.state.xIsNext ? "X" : "O");
}

export function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
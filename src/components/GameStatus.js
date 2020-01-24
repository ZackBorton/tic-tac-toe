import React from 'react'

/*
* A presentational container to return the status of the game
*/
export default function GameStatus(props) {
    let status;
    if (props.winner) {
        status = "Winner: " + props.winner;
    } else {
        if (this.state.stepNumber > 8) {
            status = "Draw: Restart match"
        } else
            status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }
    return (
        <div className='Status'>
            <p>status</p>
        </div>
    )
}
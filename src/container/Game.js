import React from 'react';
import Board from '../components/Board';
import GameTitle from '../components/GameTitle'
import CalculateWinner from '../components/Winner'

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [
                {
                    squares: Array(9).fill(null)
                }
            ],
            stepNumber: 0,
            xIsNext: true
        };
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (CalculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? "X" : "O";
        this.setState({
            history: history.concat([
                {
                    squares: squares
                }
            ]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = CalculateWinner(current.squares);

        let status;
        if (winner) {
            status = "Winner: " + winner;
        } else {
            if (this.state.stepNumber > 8) {
                status = "Draw: Restart match"
            } else
                status = "Next player: " + (this.state.xIsNext ? "X" : "O");
        }

        return (
            <div>
                <div className="game-info">
                    <div className='Status'>
                        <h1>{status}</h1>
                    </div>
                </div>
                <div className="game">

                    <div className="game-board">
                        <GameTitle value="Tic Tac Toe"/>
                        <Board
                            squares={current.squares}
                            onClick={i => this.handleClick(i)}
                        />
                    </div>

                </div>
            </div>
        );
    }
}
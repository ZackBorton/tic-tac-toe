import React from 'react';
import Square from './Square'

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
        const rows = new Array(3).fill(0);
        let squareIndex = 0;
        return (
            <div>
                {
                    rows.map(row => {
                        const squares = new Array(3).fill(0);
                        return <div className="board-row">
                            {
                                squares.map((item, index) => {
                                    squareIndex++;
                                    return this.renderSquare(squareIndex)
                                })
                            }
                        </div>
                    })
                }
                <div className="board-row">
                    <button onClick={() => window.location.reload()} type="button"
                            className="btn btn-dark Restart-button">Restart Game
                    </button>
                </div>
            </div>
        );
    }
}
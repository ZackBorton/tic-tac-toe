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
        let superIndex = 0;
        return (
            <div>
                {
                    rows.map(row => {
                        const squares = new Array(3).fill(0);
                        return <div className="board-row">
                            {
                                squares.map((item, index) => {
                                    superIndex++;
                                    return this.renderSquare(superIndex)
                                })
                            }
                        </div>
                    })
                }
                <div className="board-row">
                    <button onClick={() => window.location.reload()} type="button"
                            className="btn btn-dark">Restart
                        Game
                    </button>
                </div>
            </div>
        );
    }
}
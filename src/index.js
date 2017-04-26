/*jshint esversion: 6 */
// eslint-disable-next-line to ignore the next line.
/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import classnames from 'classnames'

class TicTacToe extends React.Component {
    constructor() {
        super();
        this.state = {
            currentPlayer: 'X',
            board: ['', '', '', '', '', '', '', '', ''],
            xWins: 0,
            oWins: 0,
            draw: 0
        }
    }

    play(index) {
        if (this.state.currentPlayer === 'X') {
            this.state.board.splice(index, 1, 'X')
            this.setState({
                board: this.state.board,
                currentPlayer: 'O'
            })
        } else {
            this.state.board.splice(index, 1, 'O')
            this.setState({
                board: this.state.board,
                currentPlayer: 'X'
            })
        }
    }

    playAgain() {
        this.setState({
            currentPlayer: 'X',
            board: ['', '', '', '', '', '', '', '', '']
        })
    }

    render() {
        let message = 'Player ' + this.state.currentPlayer + " - your turn";
        let gameOver = false;
        let b = this.state.board;
        if (b[0] === 'X' && b[1] === 'X' && b[2] === 'X' || b[3] === 'X' && b[4] === 'X' && b[5] === 'X' || b[6] === 'X' && b[7] === 'X' && b[8] === 'X' || b[0] === 'X' && b[3] === 'X' && b[6] === 'X' || b[1] === 'X' && b[4] === 'X' && b[7] === 'X' || b[2] === 'X' && b[5] === 'X' && b[8] === 'X' || b[0] === 'X' && b[4] === 'X' && b[8] === 'X' || b[2] === 'X' && b[4] === 'X' && b[6] === 'X') {
            message = 'X wins!';
            gameOver = true;

        }
        if (b[0] === 'O' && b[1] === 'O' && b[2] === 'O' || b[3] === 'O' && b[4] === 'O' && b[5] === 'O' || b[6] === 'O' && b[7] === 'O' && b[8] === 'O' || b[0] === 'O' && b[3] === 'O' && b[6] === 'O' || b[1] === 'O' && b[4] === 'O' && b[7] === 'O' || b[2] === 'O' && b[5] === 'O' && b[8] === 'O' || b[0] === 'O' && b[4] === 'O' && b[8] === 'O' || b[2] === 'O' && b[4] === 'O' && b[6] === 'O') {
            message = 'O wins!';
            gameOver = true;
        }

        if (!this.state.board.includes('') && gameOver === false) {
            message = 'Stalemate!';
            gameOver = true;
        }

        return (
            <div className="main">
                <h1>TIC TAC TOE</h1>
                <div className={classnames('board', {'disabled' : gameOver===true})}>
                    {this.state.board.map((square, index) =>
                        <div key={index}
                            className={classnames('square', {
                                'disabled' : square!= '',
                                'square_x' : this.state.currentPlayer === 'X',
                                'square_o' : this.state.currentPlayer === 'O'
                            })}
                            onClick={()=> this.play(index)}>
                            {this.state.board[index]}
                        </div>
                    )}
                    <div className="clearfix"></div>
                    <div className="message">{message}</div>
                </div>

                {gameOver ? <button onClick={() => this.playAgain()}>Play Again?</button> : <br/>}
            </div>
        )
    }
}


ReactDOM.render(<TicTacToe/>, document.getElementById('root'));

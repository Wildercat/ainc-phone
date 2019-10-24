import React from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from './Grid.js';
import appData from './tttappData.json';
import { thisExpression } from '@babel/types';


class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      twoDArr: this.arrayInit(),
      xTurn: true,
      winner: null
    }
  }
  handleClick(i, j) {
    // console.log({ i, j });
    if (!this.state.winner) {
      const grid = this.state.twoDArr
      if (!grid[i][j]) {
        grid[i][j] = this.state.xTurn ? 'X' : 'O';
        this.setState({
          twoDArr: grid,
          xTurn: !this.state.xTurn
        });
      }
      this.winCheck();
    } else {
      this.resetGame();
    }
  }

  resetGame() {
    this.setState({
      twoDArr: this.arrayInit(),
      xTurn: true,
      winner: null
    });
  }
  arrayInit() {
    let twoDArr = [];
    for (let i = 0; i < appData.content.grid.height; i++) {
      let row = [];
      for (let j = 0; j < appData.content.grid.width; j++) {
        // row.push(`i${i}, j${j}`);
        row.push('');
      }
      twoDArr.push(row);
    }
    return twoDArr;
  }

  winCheck() {
    const sq = this.state.twoDArr;
    let lines = [];
    for (let idx in sq) {
      lines.push(sq[idx].map((Jtem, jdx) => {
        return [parseInt(idx), jdx];
      }));
      lines.push(sq[idx].map((Jtem, jdx) => {
        return [jdx, parseInt(idx)];
      }))
    }
    lines.push(sq.map((Jtem, idx) => {
      return [idx, idx];
    }));
    lines.push(sq.map((Jtem, idx) => {
      return [sq.length - 1 - idx, idx];
    }));

    let winner = null;
    for (let idx in lines) {
      let [a, b, c] = lines[idx];
      if (sq[a[0]][a[1]] && sq[a[0]][a[1]] === sq[b[0]][b[1]] && sq[b[0]][b[1]] === sq[c[0]][c[1]]) {
        winner = sq[a[0]][a[1]];
      }
    }
    if (winner) {this.setState({winner: winner})};

  }
 
  render() {
    let status = this.state.winner ? this.state.winner + ' Wins! Click on the board to start over.' : `${this.state.xTurn ? 'X' : '0'}'s turn.`
    // console.log(this.state.twoDArr);
    return (
      <div className="App">
        <Grid onClick={(i, j) => this.handleClick(i, j)} array={this.state.twoDArr} size={7} />
        {status}
      </div>

    );
  }
}

export default TicTacToe;

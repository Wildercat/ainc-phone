import React from 'react';
import Grid from './Grid.js';
import appData from './slideAppData.json';

class SlidingPuzzle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            twoDArr: this.arrayInit(),
        }
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
    handleClick(i,j) {
        console.log({i,j})
    }
    render() {
        return (
            <div className="SlidingPuzzle">
                <Grid onClick={(i, j) => this.handleClick(i, j)} array={this.state.twoDArr} size={7} />
                {status}
            </div>
        );
    }
}

export default SlidingPuzzle;
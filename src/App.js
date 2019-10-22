import React from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from './grid/Grid.js';
import appData from './appData.json';

class App extends React.Component {
  render() {
    let twoDArr = [];
    for (let i = 0; i < appData.content.grid.height; i++) {
      let row = [];
      for (let j = 0; j < appData.content.grid.width; j++) {
        row.push(
          <span>a</span>
        );
      }
      twoDArr.push(row);
    }
    console.log(twoDArr);
    return (
      <div className="App">
        <Grid array={twoDArr} size={5} />
      </div>
    );
  }
}

export default App;

import React from 'react';
import Board from '../board';

export default class Game extends React.Component {

  constructor(props){
    super(props);
    this.state={
      gameArray: [1, 1, 1, 1, 1, 1, 1, 1, 1],
      playerTurn: 'x'
    };
  }

  updateGameArray = (newArr) => {
    this.setState({
      gameArray: newArr,
      playerTurn: this.state.playerTurn === 'x' ? 'o': 'x'
    });
  }

  render(){
    return (
      <div>
        <div className="gameBtnContainer">
          GameContainer
        </div>
        <div>
          <Board gameArray={this.state.gameArray} playerTurn={this.state.playerTurn} updateGameArray={this.updateGameArray}/>
        </div>
      </div>
    );
  }
}

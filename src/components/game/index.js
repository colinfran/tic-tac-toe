import React from 'react';
import Board from '../board';
import Button from '@material-ui/core/Button';

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

  restardGame = () => {
    this.setState({
      gameArray: [1, 1, 1, 1, 1, 1, 1, 1, 1],
      playerTurn: 'x'
    })
  }

  render(){
    return (
      <div>
        <div className="gameBtnContainer">
          <Button className="gameBtnContainerBtn" variant="contained" color="primary" onClick={()=> this.restardGame()}>
            Restart Game
          </Button>
          <Button className="gameBtnContainerBtn" variant="contained" color="primary">
            Step back
          </Button>
        </div>
        <div>
          <Board gameArray={this.state.gameArray} playerTurn={this.state.playerTurn} updateGameArray={this.updateGameArray}/>
        </div>
      </div>
    );
  }
}

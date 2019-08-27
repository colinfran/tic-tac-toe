import React from 'react';
import Board from '../board';
import Button from '@material-ui/core/Button';

export default class Game extends React.Component {
  constructor(props){
      super(props);
      this.state={
        gameArray: [1, 1, 1, 1, 1, 1, 1, 1, 1],
        recordedMoves: [],
        playerTurn: 'x',
        recordedMovesIndex: 0
      };
    }

  updateGameArray = (newArr) => {
    var records = [...this.state.recordedMoves];
    records.push({record: newArr});
    this.setState({
      gameArray: newArr,
      recordedMoves: records,
      recordedMovesIndex: this.state.recordedMovesIndex + 1,
      playerTurn: this.state.playerTurn === 'x' ? 'o': 'x'
    });
  }

  restardGame = () => {
    this.setState({
      gameArray: [1, 1, 1, 1, 1, 1, 1, 1, 1],
      playerTurn: 'x'
    })
  }

  stepBack = () => {
    var prevPlayerTurn = this.state.playerTurn === 'x' ? 'o' : 'x';
    var prevRecordedMoves = [...this.state.recordedMoves];
    var prevRecordedMovesIndex = this.state.recordedMovesIndex -1;
    if (prevRecordedMovesIndex > 0){
      prevRecordedMoves.pop();
      this.setState({
        gameArray: prevRecordedMoves[prevRecordedMoves.length-1].record,
        recordedMoves: prevRecordedMoves,
        playerTurn: prevPlayerTurn,
        recordedMovesIndex: prevRecordedMovesIndex
      })
    }
    else{
      prevRecordedMovesIndex = 0;
      prevPlayerTurn = 'x';
      this.setState({
        gameArray: [1, 1, 1, 1, 1, 1, 1, 1, 1],
        recordedMoves: [],
        playerTurn: 'x',
        recordedMovesIndex: 0,
        outCome: "",
        winType: ""
      })
    }
  }

  render(){
    return (
      <div>
        <div className="gameBtnContainer">
          <Button id="restartGame" className="gameBtnContainerBtn" variant="contained" color="primary" onClick={()=> this.restardGame()}>
            Restart Game
          </Button>
          <Button id="stepBack" className="gameBtnContainerBtn" variant="contained" color="primary" onClick={()=> this.stepBack()}>
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

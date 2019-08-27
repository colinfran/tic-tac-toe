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
      recordedMovesIndex: 0,
      outCome: "",
      winType: ""
    };
  }

  getGetOrdinal = (n) => {
    var s=["th","st","nd","rd"], v=n%100;
    return n+(s[(v-20)%10]||s[v]||s[0]);
  }

  checkForWinner = (arr) => {
    var turn = this.state.playerTurn;
    // check horizontal win
    var rowCount = 0;
    for (var i = 0; i <= 6; i += 3) {
      if (arr[i] === turn && arr[i + 1] === turn && arr[i + 2] === turn){
        this.setState({winType:`horizontal ${this.getGetOrdinal(rowCount + 1)} row`});
        return true;
      }
      rowCount++;
    }
    // check vertical win
    var columnCount = 0;
    for (i = 0; i <= 2; i++) {
      if (arr[i] === turn && arr[i + 3] === turn && arr[i + 6] === turn){
        this.setState({winType:`vertical ${this.getGetOrdinal(columnCount + 1)} column`});
        return true;
      }
      columnCount++;
    }

    // check diagonal win
    if (arr[0] === turn && arr[4] === turn && arr[8] === turn){
      this.setState({winType:"diagonal top left to bottom right"});
      return true;
    }
    if (arr[2] === turn && arr[4] === turn && arr[6] === turn){
      this.setState({winType:"diagonal bottom left to top right"});
      return true;
    }
    return false;
  }

  updateGameArray = (newArr) => {
    var records = [...this.state.recordedMoves];
    records.push({record: newArr});
    var outCome = "";
    if (this.checkForWinner(newArr))
      outCome = this.state.playerTurn;
    else if (this.state.recordedMovesIndex >= this.state.gameArray.length-1)
      outCome="draw";
    this.setState({
      gameArray: newArr,
      recordedMoves: records,
      recordedMovesIndex: this.state.recordedMovesIndex + 1,
      outCome: outCome,
      playerTurn: this.state.playerTurn === 'x' ? 'o': 'x'
    });
  }

  restardGame = () => {
    this.setState({
      gameArray: [1, 1, 1, 1, 1, 1, 1, 1, 1],
      recordedMoves: [],
      playerTurn: 'x',
      recordedMovesIndex: 0,
      outCome: "",
      winType: ""
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
        recordedMovesIndex: prevRecordedMovesIndex,
        outCome: "",
        winType: ""
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

  renderBottomText = () => {
    if (this.state.outCome === ""){
      return(
        <div>
          <div className="bottomText">{`Player ${this.state.playerTurn}'s turn.`}</div>
        </div>
      );
    }
    else{
      if (this.state.outCome === 'draw'){
        return(
          <div>
            <div className="bottomText gameTie">
              <div>Draw!</div>
              <div>The game ended in a tie.</div>
            </div>
          </div>
        );
      }
      else{
        return(
          <div>
            <div className="bottomText gameWin">
              <div>Winner Winner Chicken Dinner!</div>
              <div>{`Player ${this.state.outCome} is the winner!`}</div>
              <div>{`${this.state.winType} win`}</div>
            </div>
          </div>
        );
      }
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
        <div style={this.state.outCome !== "" ? {pointerEvents: 'none'} : {}} >
          <Board gameArray={this.state.gameArray} updateGameArray={this.updateGameArray} playerTurn={this.state.playerTurn} />
          {this.renderBottomText()}
        </div>
      </div>
    );
  }
}

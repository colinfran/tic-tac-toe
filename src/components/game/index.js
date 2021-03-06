import React from 'react';
import Board from '../board';
import Button from '@material-ui/core/Button';

/**
  This component represents the board of the tic-tac-toe game.
  All of the game's logic comes from this component as state values.
  some of these state values are passed down to its child components
**/
export default class Game extends React.Component {
  constructor(props){
    super(props);
    this.state={
      gameArray: [1, 1, 1, 1, 1, 1, 1, 1, 1], /** 3x3 game array **/
      recordedMoves: [], /** array of objects of each move of the game **/
      playerTurn: 'x', /**  player up to click a square **/
      recordedMovesIndex: 0, /**  maxIndex value in recordedMoves array **/
      outCome: "", /**  outcome of game, is empty string until win or draw **/
      winType: "", /**  if win, was it diagnal, vertical, horizontal? **/
      winLine: "hidden"/**  string to hold css className for win line **/
    };
  }

  getOrdinal = (n) => {
  /* function to return integer as string with ordinal ending */
    var s=["th","st","nd","rd"], v=n%100;
    return n+(s[(v-20)%10]||s[v]||s[0]);
  }

  checkForWinner = (arr) => {
    /* Checks for horizontal, vertical, and diagnal wins */
    var turn = this.state.playerTurn;
    var rowCount = 0;
    var winClass = "hidden";
    for (var i = 0; i <= 6; i += 3) {
      if (arr[i] === turn && arr[i + 1] === turn && arr[i + 2] === turn){
        winClass = "winLine horizontalWin winRow" + (rowCount + 1);
        this.setState({winType:`horizontal ${this.getOrdinal(rowCount + 1)} row`, winLine: winClass});
        return true;
      }
      rowCount++;
    }
    var columnCount = 0;
    for (i = 0; i <= 2; i++) {
      if (arr[i] === turn && arr[i + 3] === turn && arr[i + 6] === turn){
        winClass = "winLine verticalWin winColumn" + (columnCount+1);
        this.setState({winType:`vertical ${this.getOrdinal(columnCount + 1)} column`, winLine: winClass});
        return true;
      }
      columnCount++;
    }
    if (arr[0] === turn && arr[4] === turn && arr[8] === turn){
      winClass = "winLine diagonalWin winTopLeftToBottomRight";
      this.setState({winType:"diagonal top left to bottom right", winLine: winClass});
      return true;
    }
    if (arr[2] === turn && arr[4] === turn && arr[6] === turn){
      winClass = "winLine diagonalWin winBottomLeftToTopRight";
      this.setState({winType:"diagonal bottom left to top right", winLine: winClass});
      return true;
    }
    return false;
  }

  updateGameArray = (newArr) => {
    /* Update states on valid square click, also checking for winner or draw */
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

  restartGame = () => {
    /* restart all states on Restart Button Click */
    this.setState({
      gameArray: [1, 1, 1, 1, 1, 1, 1, 1, 1],
      recordedMoves: [],
      playerTurn: 'x',
      recordedMovesIndex: 0,
      outCome: "",
      winType: "",
      winLine: "hidden"
    })
  }

  stepBack = () => {
    /* step back a step - update state values to previous recorded move */
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
        winType: "",
        winLine: "hidden"
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
        winType: "",
        winLine: "hidden"
      })
    }
  }

  renderBottomText = () => {
    /* Display the player turn while game is running and there is no outcome
      If there is an update to outcome, display info for that outcome. */
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
              <div className="styledBottomText">{`${this.state.winType} win`}</div>
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
          <Button id="restartGame" className="gameBtnContainerBtn" variant="contained" color="primary" onClick={()=> this.restartGame()}>
            Restart Game
          </Button>
          <Button id="stepBack" className="gameBtnContainerBtn" variant="contained" color="primary" onClick={()=> this.stepBack()}>
            Step back
          </Button>
        </div>
        <div style={this.state.outCome !== "" ? {pointerEvents: 'none'} : {}} >
          <Board gameArray={this.state.gameArray} updateGameArray={this.updateGameArray} playerTurn={this.state.playerTurn} winLine={this.state.winLine}/>
          {this.renderBottomText()}
        </div>
      </div>
    );
  }
}

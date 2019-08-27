import React from 'react';
import Square from '../square';


export default class Board extends React.Component {
  
  updateGameArray = (val, index) => {
    var newArray = [...this.props.gameArray];
    newArray[index]=val;
    this.props.updateGameArray(newArray);
  }


  playerMoves = () => {
    return(
      <div className="playerMovesContainer">
        <div className="playerMovesContainerRow">
          <Square updateGameArray={this.updateGameArray} gameArray={this.props.gameArray} playerTurn={this.props.playerTurn} idx={0}/>
          <Square updateGameArray={this.updateGameArray} gameArray={this.props.gameArray} playerTurn={this.props.playerTurn} idx={1}/>
          <Square updateGameArray={this.updateGameArray} gameArray={this.props.gameArray} playerTurn={this.props.playerTurn} idx={2}/>
        </div>
        <div className="playerMovesContainerRow">
          <Square updateGameArray={this.updateGameArray} gameArray={this.props.gameArray} playerTurn={this.props.playerTurn} idx={3}/>
          <Square updateGameArray={this.updateGameArray} gameArray={this.props.gameArray} playerTurn={this.props.playerTurn} idx={4}/>
          <Square updateGameArray={this.updateGameArray} gameArray={this.props.gameArray} playerTurn={this.props.playerTurn} idx={5}/>
        </div>
        <div className="playerMovesContainerRow">
          <Square updateGameArray={this.updateGameArray} gameArray={this.props.gameArray} playerTurn={this.props.playerTurn} idx={6}/>
          <Square updateGameArray={this.updateGameArray} gameArray={this.props.gameArray} playerTurn={this.props.playerTurn} idx={7}/>
          <Square updateGameArray={this.updateGameArray} gameArray={this.props.gameArray} playerTurn={this.props.playerTurn} idx={8}/>
        </div>
      </div>
    );
  }

  render(){
    return (
      <div className="boardContainer">
        <div>
          <div className="boardRow1">
            <div className="column">
            </div>
            <div className="column">
            </div>
          </div>
          <div className="boardRow2">
            <div className="column">
            </div>
            <div className="column">
            </div>
          </div>
          <div className="boardRow3">
            <div className="column">
            </div>
            <div className="column">
            </div>
          </div>
        </div>
        {this.playerMoves()}
      </div>
    );
  }
}

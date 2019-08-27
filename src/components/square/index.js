import React from 'react';

/**
  This component represents each of the squares in the tic-tac-toe board.
**/
export default class Square extends React.Component {

  updateGameArray = () => {
    /* verify square hasn't been clicked; if it hasn't, run parent function. */
    if (this.props.gameArray[this.props.idx] === 'x' || this.props.gameArray[this.props.idx] === 'o') return;
    this.props.updateGameArray(this.props.playerTurn,this.props.idx);
  }


  render(){
    return (
      <div className="square" onClick={this.updateGameArray}>
        {this.props.gameArray[this.props.idx] === 1 ? " " : this.props.gameArray[this.props.idx]}
      </div>
    );
  }
}

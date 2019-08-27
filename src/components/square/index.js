import React from 'react';


export default class Square extends React.Component {
  updateGameArray = () => {
    // make sure the square hasnt been clicked
    if (this.props.gameArray[this.props.idx] === 'x' || this.props.gameArray[this.props.idx] === 'o') return;
    this.props.updateGameArray(this.props.playerTurn,this.props.idx);
  }


  render(){
    return (
      <div className="square" onClick={this.updateGameArray}>
        {this.props.gameArray[this.props.idx]}
      </div>
    );
  }
}

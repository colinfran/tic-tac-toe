import React from 'react';
import Square from '../square';


export default class Board extends React.Component {

  playerMoves = () => {
    return(
      <div className="playerMovesContainer">
        <div className="playerMovesContainerRow">
          <Square />
          <Square />
          <Square />
        </div>
        <div className="playerMovesContainerRow">
          <Square />
          <Square />
          <Square />
        </div>
        <div className="playerMovesContainerRow">
          <Square />
          <Square />
          <Square />
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

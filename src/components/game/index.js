import React from 'react';
import Board from '../board';

export default class Game extends React.Component {

  render(){
    return (
      <div>
        <div className="gameBtnContainer">
          GameContainer
        </div>
        <div>
          <Board />
        </div>
      </div>
    );
  }
}

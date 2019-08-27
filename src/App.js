import React from 'react';
import Game from './components/game';
import './App.css';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      gameStarted: false
    };
  }

  renderStart = () => {
    if (this.state.gameStarted){
      return (
        <div>
          <Game/>
        </div>
      );
    }
    else{
      return (
        <div className="gameOnLoad">
          Click start to start a game of tic-tac-toe
          <button className="startButton" onClick={()=>this.setState({gameStarted: true})}>
            Start
          </button>
        </div>
      );
    }
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          {this.renderStart()}
        </header>
      </div>
    );
  }
}

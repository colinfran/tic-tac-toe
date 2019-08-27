import React from 'react';
import Game from './components/game';
import './App.css';
import Button from '@material-ui/core/Button';

/**
  This is the first compoent that gets called in the index.js file.
  This component is the root of all the other components.
**/
export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      gameStarted: false /** boolean value to represent showing game on page **/
    };
  }

  renderStart = () => {
    /* displays the game once the user clicks the 'Start' Button */
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
          <Button id="startButton" variant="contained" color="primary"  onClick={()=>this.setState({gameStarted: true})}>
            Start
          </Button>
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

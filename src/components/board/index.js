import React from 'react';


export default class Board extends React.Component {

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
      </div>
    );
  }
}

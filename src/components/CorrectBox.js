import React, { Component } from 'react';

import '../styles/CorrectBox.scss';

export default class CorrectBox extends Component {
  render() {
    return (
      <div className="correct-box" >
        <div className="correct-div" >
          <p>correct: {this.props.numCorrect}</p>
        </div>
        <div className="incorrect-div" >
          <p>incorrect: {this.props.numIncorrect}</p>
        </div>
      </div>
    )
  }
}
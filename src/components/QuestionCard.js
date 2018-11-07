import React, { Component } from 'react';

import '../styles/QuestionCard.scss';

export default class QuestionCard extends Component {

  render() {
    return (
      <div className="question-card" >
        <h3>Question:</h3>
        <p>{this.props.question}</p>
      </div>
    )
  }
}
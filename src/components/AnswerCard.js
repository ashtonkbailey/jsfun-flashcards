import React, { Component } from 'react';

import '../styles/AnswerCard.scss'

export default class AnswerCard extends Component {

  render() {
    let answer;

    if (this.props.guessed && this.props.guessedRight) {
      
      answer = <li 
                className="correct-guess"
                >nice work! it is {this.props.correctAnswer}
              </li>

    } else if (this.props.guessed) {
      
      answer = <li>incorrect! get a new question</li>
    
    } else {
    
      answer = this.props.answers.map((answer, index) => {
              return (
                <li 
                  key={index}
                  onClick={this.props.checkAnswer}
                  >{answer}
                </li>
              )
            })
      
    };

    return (
      <div className="answer-card" >
        <h3>Answer:</h3>
        <ul>
          {answer}
        </ul>
      </div>
    )
  }
}
        // <p>{this.props.correctAnswer}</p>
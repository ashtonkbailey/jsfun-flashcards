import React, { Component } from 'react';

import '../styles/AnswerCard.scss'

export default class AnswerCard extends Component {

  render() {
    let answer;

    if (this.props.guessed && this.props.guessedRight) {
      
      answer = <li 
                className="correct-guess"
                >nice work! 
                <p>it's {this.props.correctAnswer}.</p>
                <p>get a new question.</p>
              </li>

    } else if (this.props.guessed) {
      
      answer = <li className="incorrect-guess"
                 >incorrect! it's 
                 <p>{this.props.correctAnswer}.</p> 
                 <p>get a new question</p>
               </li>
    
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

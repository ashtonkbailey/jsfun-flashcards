import React, { Component } from 'react';

import '../styles/Cards.scss';
import QuestionCard from './QuestionCard';
import AnswerCard from './AnswerCard';

export default class Cards extends Component {

  render() {
    return (
      <div className="cards" >
        <h2>Category: {this.props.category}</h2>
        <QuestionCard 
          question={this.props.question} 
        />
        <AnswerCard 
          answers={this.props.answers}
          correctAnswer={this.props.correctAnswer}
          checkAnswer={this.props.checkAnswer}
          guessed={this.props.guessed}
          guessedRight={this.props.guessedRight}
        />
        <button 
          className="new-q-btn" 
          onClick={this.props.getNewQuestion}
          >new question
        </button>
      </div>
    )
  }
}
import React, { Component } from 'react';
import './App.scss';

import Cards from './components/Cards';
import CompletedBox from './components/CompletedBox';
import CorrectBox from './components/CorrectBox';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      allQuestions: null,
      currIndex: null,
      category: '',
      question: '',
      answers: [],
      correctAnswer: '',
      numCorrect: 0,
      numIncorrect: 0,
      correctList: [],
      incorrectList: [],
      percentCompleted: 0,
      guessed: false,
      guessedRightAnswer: false
    }
  }

  getNewQuestion = () => {
    let incorrectListLength = this.state.incorrectList.length;
    let randomIndex = this.generateRandomIndex(incorrectListLength);
    let randomQuestion = this.state.incorrectList[randomIndex];

    this.setState({
      currIndex: randomIndex,
      category: randomQuestion.category,
      question: randomQuestion.question,
      answers: randomQuestion.answers,
      correctAnswer: randomQuestion.correctAnswer,
      guessed: false,
      guessedRightAnswer: false,
    })
  }

  generateRandomIndex(questionListLength) {
    return Math.floor(Math.random() * (questionListLength));
  }

  checkAnswer = (e) => {
    let guess = e.target.innerText;
    let answer = this.state.correctAnswer;

    if (guess === answer) {
      this.updateStateLists();
      this.updateStoredLists();
      this.updateCorrScore();
      this.updateGuessedRightAnswer();
    } else {
      this.updateIncorrScore();
      this.updateGuessedWrongAnswer();
    };
    
    this.updateCompleted();
  }

  updateStateLists = () => {
    let gotCorrect = this.state.incorrectList[this.state.currIndex];
    let updatedIncorrect = this.state.incorrectList.filter(object => object !== gotCorrect);

    this.setState({
      correctList: [...this.state.correctList, gotCorrect],
      incorrectList: updatedIncorrect
    });
  }

  updateStoredLists = () => {
    let newIncorrectList = this.state.incorrectList;
    let newCorrectList = this.state.correctList;

    localStorage.setItem('incorrect', JSON.stringify(newIncorrectList));
    localStorage.setItem('correct', JSON.stringify(newCorrectList));  
  }

  updateCorrScore = () => {
    this.setState({
      numCorrect: this.state.numCorrect + 1,
    })
  }

  updateIncorrScore = () => {
    this.setState({
      numIncorrect: this.state.numIncorrect + 1,
    })
  }

  updateCompleted = () => {
    let correctNum = this.state.numCorrect;
    let allNum = this.state.allQuestions.length;
    let complete = Math.floor((correctNum / allNum) * 100);

    this.setState({
      percentCompleted: complete,
    })
  }

  updateGuessedRightAnswer = () => {
    this.setState({
      guessed: true,
      guessedRightAnswer: true,
    })
  }

  updateGuessedWrongAnswer = () => {
    this.setState({
      guessed: true,
    })
  }

  getStorage = () => {
    if (localStorage.getItem('correct') === null) {
      let correct = this.state.correctList;
      localStorage.setItem('correct', JSON.stringify(correct));
    } else {
      var parsedCorrect = JSON.parse(localStorage.getItem('correct'));
    };

    if (localStorage.getItem('incorrect') === null) {
      let incorrect = this.state.allQuestions;
      localStorage.setItem('incorrect', JSON.stringify(incorrect));
    } else {
      var parsedIncorrect = JSON.parse(localStorage.getItem('incorrect'));
    };

    this.setState({
      correctList: parsedCorrect,
      incorrectList: parsedIncorrect
    })
  }

  clearStorage = () => {
    localStorage.clear();
    this.getStorage();
  }

  componentDidMount() {
    fetch('http://memoize-datasets.herokuapp.com/api/v1/jsfunQuestions')
      .then(response => response.json())
      .then(data => {
        this.setState({
          allQuestions: data.jsfunQuestions,
        });
        this.getStorage();
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App" >
        <header className="App-header" >
          <h1>JSFun Trivia</h1>
        </header>
        <Cards 
          checkAnswer={this.checkAnswer}
          category={this.state.category}
          question={this.state.question}
          answers={this.state.answers}
          correctAnswer={this.state.correctAnswer}
          getNewQuestion={this.getNewQuestion}
          guessed={this.state.guessed}
          guessedRight={this.state.guessedRightAnswer}
        />
        <CompletedBox 
          percent={this.state.percentCompleted}
          clearStorage={this.clearStorage}
        />
        <CorrectBox
          numCorrect={this.state.numCorrect}
          numIncorrect={this.state.numIncorrect}
        />
      </div>
    );
  }
}



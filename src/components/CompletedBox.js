import React, { Component } from 'react';

import '../styles/CompletedBox.scss';
import AboutModal from './AboutModal';

export default class CompletedBox extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    }
  }

  showAboutModal = () => {
    this.setState({
      show: true
    }) 
  }

  hideAboutModal = () => {
    this.setState({
      show: false
    }) 
  }

  render() {
    return (
      <div className="completed-div" >
        <button 
          className="about-btn"
          onClick={this.showAboutModal}
          > about
        </button>

        <AboutModal
          show={this.state.show} 
          close={this.hideAboutModal}
        />
        
        <div className="completed-box" >
          <h2>Completed</h2>
          <p>{this.props.percent}%</p>
        </div>

        <button 
          className="clear-btn" 
          onClick={this.props.clearStorage}
          >clear history
        </button>
      </div>
    )
  }
}
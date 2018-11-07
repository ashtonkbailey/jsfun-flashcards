import React, { Component } from 'react';

import '../styles/AboutModal.scss';

export default class AboutModal extends Component {

  render() {
    const showHideClassName = this.props.show ? "modal display-block" : "modal display-none";

    return (
      <div className={showHideClassName} >
        <div className="about-content" >
          <p>This app was developed using some of the latest research on memory and learning. The color scheme includes light blue and a little bit of green with warm neutrals. According to <a href="https://www.shiftelearning.com/blog/how-do-colors-influence-learning" target="_blank" rel="noopener noreferrer">this</a> article, the latest psychological studies on color have found that greens promote calm and focus. Lighter blues are better for high productivity in intensely challenging environments. Because they are on the cool spectrum of color, it is best to balance them with warm colors, such as orange-tinted browns and yellows. The font was chosen intentionally as well. Studies that have been summarized <a href="https://faculty.washington.edu/chudler/font.html" target="_blank" rel="noopener noreferrer">here</a> have shown that text that is somewhat difficult to read, at least at a fast pace, promotes "deeper processing strategies". Students were found to have better memory retention when memorizing from challenging font styles.</p>
          <button 
            className="close-btn"
            onClick={this.props.close}
            >&times;
          </button>
        </div>
      </div>
    )
  }
}
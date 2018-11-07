import React, { Component } from 'react';

export default class CategoryCard extends Component {

  render() {
    return (
      <div>
        <p>Category: {this.props.category}</p>
      </div>
    )
  }
}
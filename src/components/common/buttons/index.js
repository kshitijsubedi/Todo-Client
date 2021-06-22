import './button.css';
import React from 'react';

export default class Button extends React.Component {
  render() {
    return (
      <button
        type={this.props.type}
        className={`button ${this.props.buttonClass} ${this.props.color}`}
        onClick={this.props.onClick}
      >
        {this.props.buttonText}
      </button>
    );
  }
}

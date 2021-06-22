import './input.css';
import React from 'react';

export default class Input extends React.Component {
  render() {
    return (
      <div className="input">
        <input
          id={this.props.id}
          name={this.props.name}
          type={this.props.type}
          className={`input-field ${this.props.status}`}
          onChange={this.props.onChange}
          onBlur={this.props.onBlur}
          value={this.props.value}
          required
        />
        <label className="input-label">{this.props.label}</label>
      </div>
    );
  }
}

import React, { Component } from "react";

class FormInput extends Component {
  render() {
    return (
      <input
        value={this.props.value}
        onChange={this.props.onChange}
        type={this.props.type}
        className={this.props.className}
        id={this.props.name}
        name={this.props.name}
        placeholder={this.props.placeholder}
        autoFocus
      />
    );
  }
}

export default FormInput;

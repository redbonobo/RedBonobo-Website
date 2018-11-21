import React, { Component } from "react";

class FormError extends Component {
  state = {};
  render() {
    return <div className="alert alert-danger">{this.props.error}</div>;
  }
}

export default FormError;

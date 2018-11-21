import React, { Component } from "react";

class Like extends Component {
  state = {
    isLiked: this.props.isLiked
  };

  getClasses = () => {
    return this.state.isLiked ? "fa fa-heart" : "fa fa-heart-o";
  };

  changeStatus = () => {
    let isLiked = !this.state.isLiked;
    this.setState({ isLiked });
  };

  render() {
    return (
      <i
        onClick={this.changeStatus}
        style={{ cursor: "pointer" }}
        className={this.getClasses()}
        aria-hidden="true"
      />
    );
  }
}

export default Like;

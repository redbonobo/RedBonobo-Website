import React, { Component } from "react";

class Lightbox extends Component {
  state = {};
  render() {
    return (
      <div className="lightbox">
        <i
          onClick={this.props.onClose}
          className="fas fa-times lightbox-close"
        />
        <img className="lightbox-image" src={this.props.imageSrc} />
      </div>
    );
  }
}

export default Lightbox;

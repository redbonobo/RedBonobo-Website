import React, { Component } from "react";

class Lightbox extends Component {
  state = {};

  constructor() {
    super();
    this.state.transition = "invisible";
  }

  componentDidMount() {
    setTimeout(() => this.setState({ transition: "visible" }), 1);
  }

  makeInvisible = () => {
    this.setState({ transition: "invisible" });
  };

  render() {
    return (
      <div className={`lightbox ${this.state.transition}`}>
        <div className="lightbox-window">
          <img
            className="lightbox-image"
            alt={this.props.element.coverUrl}
            src={this.props.element.coverUrl}
          />
          <div className="lightbox-info">
            <div className="lightbox-text">
              <h3>{this.props.element.name}</h3>
              <h4>{this.props.element.type}</h4>
            </div>
            <i
              className="fas fa-times lightbox-close"
              onClick={this.props.onClose}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Lightbox;

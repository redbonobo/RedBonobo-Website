import React, { Component } from "react";

class Parallax extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.state.factor = this.props.factor;
    this.state.backgroundImage = this.props.backgroundImage;
    this.state.faster = this.props.faster === true ? "-" : "";
    this.state.scroll = 0;
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "200px",
          padding: "130px 10vw",
          textAlign: "center",
          backgroundImage: `url(${this.state.backgroundImage})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover"
        }}
        className="parallaxBackground"
      >
        {this.props.children}
      </div>
    );
  }
}

export default Parallax;

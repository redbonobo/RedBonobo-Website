import React, { Component } from "react";
import { Parallax } from "react-parallax";

class Jumbotron extends Component {
  state = {};
  render() {
    return (
      <div>
        {/* https://www.npmjs.com/package/react-parallax */}
        <Parallax
          blur={0}
          bgImage={this.props.coverImage}
          bgImageAlt="cover"
          strength={this.props.strength}
          className="jumboCover"
        >
          <h1 style={{ marginTop: `${this.props.height / 1.6}px` }}>
            {this.props.slogan}
          </h1>
          <div style={{ height: `${this.props.height / 2}px` }} />
        </Parallax>
      </div>
    );
  }
}

export default Jumbotron;

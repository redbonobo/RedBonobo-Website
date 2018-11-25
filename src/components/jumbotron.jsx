import React, { Component } from "react";
import { Parallax } from "react-parallax";

class Jumbotron extends Component {
  state = {
    coverImage: this.props.coverImage,
    strength: this.props.strength,
    height: this.props.height,
    children: this.props.children,
    slogan: this.props.slogan
  };

  getLinearInterpolation = () => {
    const p1 = 0.64;
    const p0 = 0.75;
    const m = 1 / (p1 - p0);
    const n = -1 * (m * p0);
    return { m: m, n: n };
  };

  render() {
    const { m, n } = this.getLinearInterpolation();
    return (
      <div>
        {/* https://www.npmjs.com/package/react-parallax */}
        <Parallax
          blur={{ min: -40, max: 60 }}
          bgImage={this.state.coverImage}
          bgImageAlt="cover"
          strength={this.state.strength}
          className="jumboCover"
          renderLayer={percentage => (
            <div
              className="jumboSlogan"
              style={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                paddingTop: `${this.state.height / 2}px`,
                color: `rgba(255, 255, 255, ${m * percentage + n})`,
                textAlign: "center"
              }}
            >
              {this.state.slogan}
            </div>
          )}
        >
          <div style={{ height: `${this.state.height}px` }} />
        </Parallax>
      </div>
    );
  }
}

export default Jumbotron;

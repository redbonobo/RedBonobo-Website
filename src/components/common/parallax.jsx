import React, { Component } from "react";

class Parallax extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.state.height = this.props.height;
    this.state.factor = this.props.factor;
    this.state.backgroundImage = this.props.backgroundImage;
    this.state.faster = this.props.faster === true ? "-" : "";
    this.state.height = this.props.height;
    this.state.scroll = 0;
  }

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  handleScroll = () => {
    const scroll = document.documentElement.scrollTop;
    this.setState({ scroll });
  };

  setSlogan = () => {};

  render() {
    return (
      <div style={{ height: `${this.state.height}vh` }}>
        <div
          style={{
            display: "block",
            width: "100%",
            height: "100%",
            backgroundImage: `url(${this.state.backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: `0px ${this.state.faster}${this.state.scroll *
              this.state.factor -
              300}px`,
            textAlign: "center"
          }}
          className="parallaxBackground"
        >
          <div
            style={{
              paddingTop: `${this.state.height / 2}vh`,
              opacity: `${1 - this.state.scroll * 0.002}`
            }}
            className="parallaxChildren"
          >
            {this.props.slogan && (
              <h1
                className="jumboSlogan"
                style={{ letterSpacing: `${1 + this.state.scroll * 0.02}px` }}
              >
                {this.props.slogan}
              </h1>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Parallax;

import React, { Component } from "react";

class Parallax extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.state.height = this.props.height;
    this.state.factor = this.props.factor;
    this.state.backgroundImage = this.props.backgroundImage;
    this.state.faster = this.props.faster === true ? "-" : "";

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
      <div style={{ height: "100vh" }}>
        <div
          style={{
            backgroundImage: `url(${this.state.backgroundImage})`,
            display: "block",
            width: "100%",
            height: "100%",
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
              paddingTop: "50vh",
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
            {/* <i
              className="fas fa-arrow-down"
              style={{ color: "white", fontSize: "25px" }}
            /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Parallax;

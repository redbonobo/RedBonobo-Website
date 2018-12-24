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
          backgroundSize: "cover",
          backgroundPosition: `0px ${this.state.faster}${this.state.scroll *
            this.state.factor -
            300}px`
        }}
        className="parallaxBackground"
      >
        {this.props.children}
      </div>
    );
  }
}

export default Parallax;

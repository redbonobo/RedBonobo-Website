import React, { Component } from "react";

class ServicesPage extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo({ left: 0, top: 0, behavior: "instant" });
  }
  render() {
    return (
      <React.Fragment>
        <p>I am the red bonobo.</p>
      </React.Fragment>
    );
  }
}

export default ServicesPage;

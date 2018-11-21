import React, { Component } from "react";

import Jumbotron from "./jumbotron";

class Story extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Jumbotron
          coverImage={require("../img/cover1.jpg")}
          slogan="Ioan fiydaputa."
          height="1200"
          strength={-2000}
        />
      </React.Fragment>
    );
  }
}

export default Story;

import React, { Component } from "react";

import Jumbotron from "./jumbotron";

class Story extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Jumbotron
          coverImage={require("../img/cover1.jpg")}
          slogan="The story of the Red Bonobo"
          height="1000"
          strength={-2000}
        />
      </React.Fragment>
    );
  }
}

export default Story;

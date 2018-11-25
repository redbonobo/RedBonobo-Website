import React, { Component } from "react";
import ProjectGrid from "./projectGrid";
import Contact from "./contact";
import Jumbotron from "./jumbotron";

class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Jumbotron
          coverImage={require("../img/cover1.jpg")}
          slogan="We design reality."
          height="1000"
          strength={-1000}
        />
        <ProjectGrid />
        <Contact />
      </React.Fragment>
    );
  }
}

export default Home;

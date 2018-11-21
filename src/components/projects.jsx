import React, { Component } from "react";
import ProjectGrid from "./projectGrid";
import ContactForm from "./contactForm";

import Jumbotron from "./jumbotron";

class Projects extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Jumbotron
          coverImage={require("../img/cover1.jpg")}
          slogan="Idea + Details = Design."
          height="400"
          strength={0}
        />
        <ProjectGrid />
        <ContactForm />
      </React.Fragment>
    );
  }
}

export default Projects;

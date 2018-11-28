import React, { Component } from "react";
import ContactPage from "./contactPage";
import Parallax from "./common/parallax";
import ServicesPage from "./servicesPage";
import ProjectsPage from "./projectsPage";

class HomePage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Parallax
          factor={0.5}
          faster={false}
          backgroundImage={require("../img/cover1.jpg")}
          slogan="We believe in shapes."
        />
        <ServicesPage />
        <ProjectsPage />
        <ContactPage />
      </React.Fragment>
    );
  }
}

export default HomePage;

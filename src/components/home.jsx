import React, { Component } from "react";
import ProjectGrid from "./projectGrid";
import ContactForm from "./contactForm";
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
        <ContactForm />
      </React.Fragment>
    );
  }
}

export default Home;

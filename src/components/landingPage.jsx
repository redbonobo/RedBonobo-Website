import React, { Component } from "react";
import Parallax from "./common/parallax";
import StoryBanner from "./storyBanner";
import ProjectsBanner from "./projectsBanner";
import ContactForm from "./contactForm";

class LandingPage extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo({ left: 0, top: 0, behavior: "instant" });
  }
  render() {
    return (
      <React.Fragment>
        <Parallax
          factor={0.7}
          faster={false}
          height="50"
          backgroundImage={require("../img/cover1.jpg")}
          slogan="We believe in shapes."
        />
        <StoryBanner />
        <ProjectsBanner />
        <div className="landingContact">
          <ContactForm />
        </div>
      </React.Fragment>
    );
  }
}

export default LandingPage;

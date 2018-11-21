import React, { Component } from "react";
import ContactForm from "./contactForm";

import Jumbotron from "./jumbotron";

class Contact extends Component {
  state = {};

  render() {
    return (
      <div>
        <Jumbotron
          coverImage={require("../img/cover1.jpg")}
          slogan=""
          height="800"
        />
        <ContactForm />
      </div>
    );
  }
}

export default Contact;

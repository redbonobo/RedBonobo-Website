import React, { Component } from "react";
import ContactForm from "./contactForm";

class ContactPage extends Component {
  state = {};

  render() {
    return (
      <div
        style={{
          height: "700px",
          paddingTop: "100px",
          backgroundImage: `url(${require("../img/cover1.jpg")})`
        }}
      >
        <ContactForm />
      </div>
    );
  }
}

export default ContactPage;

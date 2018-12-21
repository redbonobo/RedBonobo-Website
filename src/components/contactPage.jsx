import React, { Component } from "react";
import ContactForm from "./contactForm";

class ContactPage extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo({ left: 0, top: 0, behavior: "instant" });
  }
  render() {
    return (
      <div
        style={{ margin: "auto" }}
        className="col-xs-12 col-sm-8 col-md-8 col-lg-6 col-xl-4"
      >
        <ContactForm />
      </div>
    );
  }
}

export default ContactPage;

import React, { Component } from "react";
import ContactForm from "./contactForm";
import { Parallax } from "react-parallax";

class Contact extends Component {
  state = {};

  render() {
    return (
      <div>
        <Parallax
          blur={{ min: -40, max: 60 }}
          bgImage={require("../img/cover1.jpg")}
          bgImageAlt="contact background"
          strength={0}
        >
          <div style={{ height: "1000px", paddingTop: "300px" }}>
            <div
              style={{
                textAlign: "center",
                width: "400px",
                margin: "auto",
                display: "block"
              }}
            >
              <h1 className="jumboSlogan">Get in touch</h1>
              <ContactForm />
            </div>
          </div>
        </Parallax>
      </div>
    );
  }
}

export default Contact;

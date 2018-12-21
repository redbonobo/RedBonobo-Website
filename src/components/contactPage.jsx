import React, { Component } from "react";
import ContactForm from "./contactForm";
// import ProfilePicture from "../img/profile-picture.jpg";

class ContactPage extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo({ left: 0, top: 0, behavior: "instant" });
  }
  render() {
    return (
      <div className="contact-container myContainer">
        <div className="row">
          <div className="col-lg-7" style={{ paddingRight: "20px" }}>
            <div
              style={{
                backgroundImage: `url(${require("../img/profile-picture.jpg")})`,
                backgroundSize: "cover",
                backgroundPosition: "center-top",
                borderRadius: "4px",
                minHeight: "500px",
                height: "100%"
              }}
            />
          </div>
          <div className="col-lg-5">
            <h2 style={{ paddingTop: "10px" }}>Marcel</h2>
            <p>
              Thorough Designer + Creative Engineer. Expert in turning problems
              into design challanges through innovation. Passionate about all
              design and research phases of a project. Multi-disciplinary
              creative entrepreneur.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    );
  }
}

export default ContactPage;

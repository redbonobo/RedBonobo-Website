import React, { Component } from "react";
import Logo from "../svg/Logo_dark.svg";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="footer">
        <a href="https://www.instagram.com/marceldesigner" className="social">
          {/*<i className="fab fa-instagram" />*/}
        </a>
        <img src={Logo} to="/" alt="footer-logo" />
        <p className="footer-text">&copy; Red Bonobo Design Agency.</p>
      </div>
    );
  }
}

export default Footer;

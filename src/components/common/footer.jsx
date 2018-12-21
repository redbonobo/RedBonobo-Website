import React, { Component } from "react";
// import Logo from "../../svg/Logo_dark.svg";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className="footer">
        <a href="https://www.instagram.com/marceldesigner" className="social">
          {/*<i className="fab fa-instagram" />*/}
        </a>
        <a
          className="footer-text"
          href="mailto:hello@redbonobo.pro?Subject=Hello%20redbonobo!"
          target="_top"
        >
          hello@redbonobo.pro
        </a>
      </footer>
    );
  }
}

export default Footer;

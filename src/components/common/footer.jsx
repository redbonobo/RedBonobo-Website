import React, { Component } from "react";
// import Logo from "../../svg/Logo_dark.svg";

class Footer extends Component {
  state = {};
  backToTop = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };
  render() {
    return (
      <footer className="footer">
        {/* <p className="footer-text">Designed and developed by redbonobo</p> */}
        <a
          className="footer-text"
          href="mailto:hello@redbonobo.pro?Subject=Hello%20redbonobo!"
          target="_top"
        >
          hello@redbonobo.pro
        </a>
        <h5
          onClick={this.backToTop}
          style={{ color: "#333333" }}
          className="footer-text"
        >
          back to top
        </h5>
      </footer>
    );
  }
}

export default Footer;

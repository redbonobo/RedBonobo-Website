import React, { Component } from "react";
// import LogoDark from "../../svg/Logo_dark.svg";
import LogoWhite from "../../svg/Logo_white.svg";
import { Link, NavLink } from "react-router-dom";

class NavBar extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.state.shrink = "";
    this.state.whiteOpacity = "1";
    this.state.darkOpactiy = "0";
  }

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  handleScroll = e => {
    const scrollDown =
      document.documentElement.scrollTop > window.innerHeight - 250;
    const shrink = scrollDown ? " shrink" : "";
    this.setState({ shrink });
  };

  render() {
    return (
      <React.Fragment>
        <div className={`myHeader${this.state.shrink}`}>
          <Link to="/">
            <img
              src={LogoWhite}
              className={`logo${this.state.shrink}`}
              to="/"
              alt="logo"
            />
          </Link>
          <div className="menu">
            <NavLink
              className="navlink navlink-special"
              activeClassName="navlink-active"
              to="/contact"
            >
              Contact
            </NavLink>
            <NavLink
              className="navlink"
              activeClassName="navlink-active"
              to="/projects"
            >
              Projects
            </NavLink>
            <NavLink
              className="navlink"
              activeClassName="navlink-active"
              to="/services"
            >
              Services
            </NavLink>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default NavBar;

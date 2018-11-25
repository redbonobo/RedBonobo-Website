import React, { Component } from "react";
// import LogoDark from "../svg/Logo_dark.svg";
import LogoWhite from "../svg/Logo_white.svg";
import { Link, NavLink } from "react-router-dom";

class NavBar extends Component {
  state = {
    shrink: "",
    whiteOpacity: "1",
    darkOpactiy: "0"
  };

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  handleScroll = e => {
    const scrollDown = document.documentElement.scrollTop > 650;
    const shrink = scrollDown ? " shrink" : "";
    const whiteOpacity = scrollDown ? "0" : "1";
    const darkOpacity = scrollDown ? "1" : "0";
    this.setState({ shrink, whiteOpacity, darkOpacity });
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
              style={{
                position: "absolute"
                // opacity: `${this.state.whiteOpacity}`
              }}
            />
            {/* <img
              src={LogoDark}
              className={`logo${this.state.shrink}`}
              to="/"
              alt="logo"
              style={{
                position: "absolute",
                opacity: `${this.state.darkOpacity}`
              }}
            /> */}
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
              to="/story"
            >
              Story
            </NavLink>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default NavBar;

import React, { Component } from "react";
import Logo from "../svg/Logo.svg";
import { Link, NavLink } from "react-router-dom";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="myHeader" id="navbar">
          <Link to="/">
            <img src={Logo} id="logo" className="logo" to="/" alt="logo" />
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
            <NavLink
              className="navlink"
              activeClassName="navlink-active"
              to="/"
              exact
            >
              Home
            </NavLink>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default NavBar;

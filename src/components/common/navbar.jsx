import React, { Component } from "react";
import Logo from "../../svg/redbonobo_logo.svg";
import { Link, NavLink } from "react-router-dom";

class NavBar extends Component {
  state = {};
  constructor() {
    super();
    this.state.sidebarActivated = "";
  }
  openMenu = () => {
    this.setState({ sidebarActivated: "active" });
  };

  closeMenu = () => {
    this.setState({ sidebarActivated: "" });
  };
  render() {
    return (
      <React.Fragment>
        <header className="header myContainer">
          <div className="left-menu">
            <NavLink
              exact
              className="navlink"
              activeClassName="navlink-active"
              to="/"
            >
              Projects
            </NavLink>
          </div>
          <div className="center-content">
            <Link to="/">
              <img src={Logo} className="logo" to="/" alt="logo" />
            </Link>
          </div>
          <div className="right-menu">
            <NavLink
              className="navlink"
              activeClassName="navlink-active"
              to="/contact"
            >
              Contact
            </NavLink>
          </div>
          <button onClick={this.openMenu} className="menu-button">
            <i className="fas fa-bars" />
          </button>
        </header>
        <div className={`mobile-menu ${this.state.sidebarActivated}`}>
          <div
            className={`darkness ${this.state.sidebarActivated}`}
            onClick={this.closeMenu}
          />
          <menu className={`sidebar ${this.state.sidebarActivated}`}>
            <div className="sidebar-menu">
              <Link onClick={this.closeMenu} className="sidebar-link" to="/">
                Projects
              </Link>
              <Link
                onClick={this.closeMenu}
                className="sidebar-link"
                to="/contact"
              >
                Contact
              </Link>
            </div>
            <button onClick={this.closeMenu} className="sidebar-close">
              <i className="fas fa-times" />
            </button>
          </menu>
        </div>
      </React.Fragment>
    );
  }
}

export default NavBar;

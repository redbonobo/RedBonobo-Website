import React, { Component } from "react";
import DarkLogo from "../../svg/Logo_dark.svg";
import { Link, NavLink } from "react-router-dom";

class NavBar extends Component {
  state = {};

  constructor() {
    super();
    this.state.shrink = "";
    this.state.whiteOpacity = "1";
    this.state.sidebarActivated = "";
  }

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  handleScroll = e => {
    const scrollDown = document.documentElement.scrollTop > 90;
    const shrink = scrollDown ? " shrink" : "";
    this.setState({ shrink });
  };

  openMenu = () => {
    this.setState({ sidebarActivated: "active" });
  };

  closeMenu = () => {
    this.setState({ sidebarActivated: "" });
  };

  render() {
    return (
      <React.Fragment>
        <header className={`myHeader${this.state.shrink}`}>
          <Link to="/">
            <img
              src={DarkLogo}
              className={`logo${this.state.shrink}`}
              to="/"
              alt="logo"
            />
          </Link>
          <div className="menu">
            <NavLink
              className="navlink"
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
            <button onClick={this.closeMenu} className="sidebar-close">
              <i className="fas fa-times" />
            </button>
            <Link onClick={this.closeMenu} className="sidebar-link" to="/storu">
              Story
            </Link>
            <Link
              onClick={this.closeMenu}
              className="sidebar-link"
              to="/projects"
            >
              Projects
            </Link>
            <Link
              onClick={this.closeMenu}
              className="sidebar-link"
              to="/contact"
            >
              Contact
            </Link>
          </menu>
        </div>
      </React.Fragment>
    );
  }
}

export default NavBar;

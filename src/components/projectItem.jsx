import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Parallax } from "react-parallax";
import "../App.css";

class ProjectItem extends Component {
  render() {
    const strength = Math.floor(Math.random() * 500) - 500;
    return (
      <Link to={"/projects/" + this.props.project._id} className="projectItem">
        <Parallax
          blur={0}
          bgImage={this.props.project.coverUrl}
          bgImageAlt="projectCover"
          strength={strength}
          className="projectItemBg"
        >
          <div
            className="itemArea"
            style={{
              height: `${this.props.rowHeight}px`
            }}
          />
        </Parallax>
        <h1
          style={{
            paddingTop: `${this.props.rowHeight / 2.1}px`
          }}
          className="projectItemName"
        >
          {this.props.project.name}
        </h1>
      </Link>
    );
  }
}

export default ProjectItem;

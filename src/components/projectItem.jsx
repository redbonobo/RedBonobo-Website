import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

class ProjectItem extends Component {
  state = {
    style: {
      backgroundImage: "url(" + this.props.project.coverUrl + ")"
    }
  };

  render() {
    return (
      <React.Fragment>
        <Link
          to={"/projects/" + this.props.project.id}
          className="project-item"
        >
          <div className="blur-limits">
            <div style={this.state.style} className="project-background" />
            <h1 className="project-item-title">{this.props.project.name}</h1>
          </div>
        </Link>
      </React.Fragment>
    );
  }
}

export default ProjectItem;

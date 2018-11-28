import React, { Component } from "react";
import { getProject } from "../services/projectService";

class ProjectDetailsPage extends Component {
  state = {
    project: {},
    coverHeight: 500
  };

  constructor(props) {
    super(props);
    this.state.project = getProject(this.props.match.params.id);
  }

  render() {
    const project = this.state.project;
    return (
      <div>
        <p>{project.name}</p>
        <p>{project.description}</p>
      </div>
    );
  }
}

export default ProjectDetailsPage;

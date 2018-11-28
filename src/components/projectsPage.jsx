import React, { Component } from "react";
import { getProjects } from "../services/projectService";
import Gallery from "./gallery";
// import Parallax from "./common/parallax";

class ProjectsPage extends Component {
  state = {};

  render() {
    // projects = getProjects();
    return (
      <React.Fragment>
        <Gallery elements={getProjects()} />
      </React.Fragment>
    );
  }
}

export default ProjectsPage;

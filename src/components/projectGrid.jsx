import React, { Component } from "react";
import { getProjects } from "../services/projectService";
import ProjectItem from "./projectItem";

class ProjectGrid extends Component {
  state = {
    projects: [],
    rowHeight: "600"
  };

  constructor() {
    super();
    this.state.projects = getProjects();
  }

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          {this.state.projects.map(project => (
            <div
              key={project._id}
              className="row"
              styles={{ height: `${this.state.rowHeight}px` }}
            >
              <div className="col">
                <ProjectItem
                  rowHeight={this.state.rowHeight}
                  project={project}
                />
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default ProjectGrid;

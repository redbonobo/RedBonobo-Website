import React, { Component } from "react";
import ProjectItem from "./projectItem";

class ProjectGrid extends Component {
  state = {
    projects: [
      { id: 1, name: "Venus", coverUrl: require("../img/venusCover.jpg") },
      { id: 2, name: "Mouse", coverUrl: require("../img/venusCover.jpg") },
      { id: 3, name: "Frendy", coverUrl: require("../img/venusCover.jpg") },
      { id: 4, name: "Hub", coverUrl: require("../img/venusCover.jpg") }
    ]
  };

  randomBox = () => {
    return null;
  };

  render() {
    return (
      <div class="container-fluid">
        {this.state.projects.map(project => (
          <ProjectItem key={project.id} project={project}>
            <h1>This is {project.name}</h1>
          </ProjectItem>
        ))}
      </div>
    );
  }
}

export default ProjectGrid;

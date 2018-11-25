import React, { Component } from "react";
import { getProject } from "../services/projectService";
import { Parallax } from "react-parallax";

class ProjectDetails extends Component {
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
        <Parallax
          blur={0}
          bgImage={project.coverUrl}
          bgImageAlt="projectCover"
          strength={500}
          className="projectDetailsCover"
        >
          <div
            className="itemArea"
            style={{
              height: `${this.state.coverHeight}px`
            }}
          >
            <h1
              style={{
                paddingTop: `${this.state.coverHeight / 2}px`
              }}
            >
              {project.name}
            </h1>
          </div>
        </Parallax>
        <p>{project.description}</p>
      </div>
    );
  }
}

export default ProjectDetails;

import React, { Component } from "react";
import { getProjects } from "../services/projectService";
import Gallery from "./gallery";
// import FilterButton from "./common/filterButton";

class ProjectsPage extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo({ left: 0, top: 0, behavior: "instant" });
  }
  render() {
    // projects = getProjects();
    return (
      <React.Fragment>
        <div className="myContainer">
          {/* <h2>Some of my projects</h2> */}
          <Gallery elements={getProjects()} rowHeight={300} colMinWidth={400} />
        </div>
      </React.Fragment>
    );
  }
}

export default ProjectsPage;

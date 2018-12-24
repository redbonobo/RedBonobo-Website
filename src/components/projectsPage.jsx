import React, { Component } from "react";
import { getProjects } from "../services/projectService";
import Gallery from "./gallery";
import { Link } from "react-router-dom";
import Parallax from "./common/parallax";

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
        <Parallax
          factor={0.7}
          faster={false}
          backgroundImage={require("../img/cover.jpg")}
        >
          <div className="row">
            <div className="col-md-6">
              <Link to="/" className="button overlay">
                how we do
              </Link>
            </div>
            <div className="col-md-6">
              <Link to="/contact" className="button overlay">
                contact us
              </Link>
            </div>
          </div>
        </Parallax>
      </React.Fragment>
    );
  }
}

export default ProjectsPage;

import React, { Component } from "react";

class ProjectDetails extends Component {
  state = {};
  render() {
    return (
      <p>
        hi, im a ProjectDetails page of project {this.props.match.params.id}
      </p>
    );
  }
}

export default ProjectDetails;

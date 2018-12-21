import React, { Component } from "react";

class FilterButton extends Component {
  render() {
    return (
      <button
        onClick={this.props.onClick}
        className={`filterButton ${this.props.active}`}
      >
        {/* <img alt="icon" src={this.props.icon} className="serviceIcon" /> */}
        <div className="filterTitle">{this.props.name}</div>
      </button>
    );
  }
}

export default FilterButton;

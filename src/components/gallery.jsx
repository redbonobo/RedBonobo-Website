import React, { Component } from "react";

class Gallery extends Component {
  state = {
    elements: [],
    rowHeight: 400
  };

  constructor(props) {
    super(props);
    this.state.elements = this.props.elements;
  }

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            {this.state.elements.map(element => (
              <div
                key={element._id}
                className="col galleryElement"
                style={{
                  padding: "0",
                  minWidth: "450px",
                  height: `${this.state.rowHeight}px`
                }}
              >
                <div
                  className="galleryBackground"
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    backgroundImage: `url(${element.coverUrl})`,
                    textAlign: "center",
                    backgroundSize: "100%"
                  }}
                />
                <h1
                  className="galleryCaption"
                  style={{
                    position: "absolute",
                    paddingTop: `${this.state.rowHeight / 2.2}px`,
                    left: "50%",
                    transform: "translateX(-50%)"
                  }}
                >
                  {element.name}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Gallery;

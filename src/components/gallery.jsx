import React, { Component } from "react";
import Lightbox from "./common/lightbox";

class Gallery extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.state.elements = this.props.elements;
    this.state.lightbox = false;
    this.state.lightboxImage = "";
  }
  handleClick = image => {
    this.setState({ lightbox: true, lightboxImage: image });
  };

  handleClose = () => {
    this.setState({ lightbox: false });
  };

  render() {
    const pictures = this.state.elements;
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-lg-12 galleryElement"
              style={{
                padding: "0"
              }}
            >
              <img
                className="galleryBackground"
                src={`${pictures[0].coverUrl}`}
              />
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-6 galleryElement"
              style={{
                padding: "0"
              }}
            >
              <img
                onClick={() => this.handleClick(`${pictures[1].coverUrl}`)}
                className="galleryBackground"
                src={`${pictures[1].coverUrl}`}
              />
            </div>
            <div
              className="col-lg-6 galleryElement"
              style={{
                padding: "0"
              }}
            >
              <img
                className="galleryBackground"
                src={`${pictures[2].coverUrl}`}
              />
            </div>
          </div>
        </div>
        {this.state.lightbox && (
          <Lightbox
            imageSrc={this.state.lightboxImage}
            onClose={this.handleClose}
          />
        )}
      </React.Fragment>
    );
  }
}

export default Gallery;

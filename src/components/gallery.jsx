import React, { Component } from "react";
import Lightbox from "./common/lightbox";

class Gallery extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.state.elements = this.props.elements;
    this.state.lightbox = false;
    this.state.lightboxElement = {};
    this.child = React.createRef();
  }
  handleClick = element => {
    this.setState({ lightbox: true, lightboxElement: element });
  };

  handleClose = () => {
    this.child.current.makeInvisible();
    setTimeout(() => this.setState({ lightbox: false }), 200);
  };

  render() {
    return (
      <React.Fragment>
        <div className="gallery-container">
          {this.state.elements.map(element => (
            <img
              key={element._id}
              alt={element._id}
              onClick={() => this.handleClick(element)}
              className="galleryImage"
              src={`${element.coverUrl}`}
            />
          ))}
        </div>
        {this.state.lightbox && (
          <Lightbox
            ref={this.child}
            element={this.state.lightboxElement}
            onClose={this.handleClose}
          />
        )}
      </React.Fragment>
    );
  }
}

export default Gallery;

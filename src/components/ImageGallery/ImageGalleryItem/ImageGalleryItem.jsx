import React from "react";

export class ImageGalleryItem extends React.Component {
  render() {
    return (
      <li className="ImageGalleryItem">
        <img src={this.props.url} alt="Gif" className="ImageGalleryItem-image" />
      </li>
    );
  }
}

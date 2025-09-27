import React from "react";
import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";

export class ImageGallery extends React.Component {
  render() {
    return (
      <>
        {(!this.props.notLoaded && <ul className="ImageGallery">
          {this.props.data.map((el, id) => (
            <ImageGalleryItem url={el.media_formats.gif.url} key={id} />
          ))}
        </ul>) || <p className="notloaded">Nothing yet!</p>}
      </>
    );
  }
}

import { Component } from "react";
import css from './ImageGalleryItem.module.css';

export default class ImageGalleryItem extends Component{

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      console.log("Changed search query");
      console.log('prevProps.searchQuery: ', prevProps.searchQuery );
      console.log("this.props.searchQuery: ", this.props.searchQuery);
    }
  }

  render() {
    return (
      <div className={css.ImageGalleryItem}>
        {/* <img src="" alt="" className={css.ImageGalleryItem_image} /> */}
        <p>{ this.props.searchQuery}</p>
      </div>
    )
  }
}
import { Component } from "react";
import css from './ImageGallery.module.css';
import  {ImageGalleryItem}  from '../ImageGalleryItem/ImageGalleryItem';
// import PropTypes from 'prop-types';
export default class ImageGallery extends Component {

  state = {
    error: '',
  }

  render() {
    const { queryResult } = this.props;
    return (
      <>
        {queryResult && <ul className={css.ImageGallery}>
          {queryResult.map(({ id, webformatURL, largeImageURL }) => <ImageGalleryItem key={id} image={webformatURL} largeImg={largeImageURL} />
          )}
        </ul>}          
      </> 
    )
  }
}

// ImageGallery.propTypes = {
//   queryResult: PropTypes.arrayOf(PropTypes.object).isRequired
// }
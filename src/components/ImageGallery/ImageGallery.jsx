import { Component } from "react";
import css from './ImageGallery.module.css';
import  {ImageGalleryItem}  from '../ImageGalleryItem/ImageGalleryItem';
// import PropTypes from 'prop-types';
export default class ImageGallery extends Component {

  state = {
    images: null,
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps.queryResult, this.props.queryResult);
    if (prevProps.queryResult !== this.props.queryResult) {
      this.setState({ images: this.props.queryResult })
    }
  }

  render() {
    const {images } = this.state;
    // const { searchQuery } = this.props;

    return (
      <>
        {images && <ul className={css.ImageGallery}>
          {images.map(({ id, webformatURL }) => <ImageGalleryItem key={id} image={webformatURL} />
          )}
        </ul>}          
      </>

    )
  }
}

// ImageGallery.propTypes = {
//   queryResult: PropTypes.arrayOf(PropTypes.object).isRequired
// }
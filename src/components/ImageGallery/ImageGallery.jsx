import { Component } from "react";
import css from './ImageGallery.module.css';
import  {ImageGalleryItem}  from '../ImageGalleryItem/ImageGalleryItem';
// import PropTypes from 'prop-types';
export default class ImageGallery extends Component {

  state = {
    error: '',
  }

  // componentDidUpdate(prevProps, prevState) {
  //   // console.log(prevProps.queryResult, this.props.queryResult);
  //   if (this.props.queryResult === []) {
  //     this.setState({ error: 'Enter correct search request!' })
  //   }
  // }

  render() {
    const { queryResult } = this.props;
    return (
      <>
        {queryResult && <ul className={css.ImageGallery}>
          {queryResult.map(({ id, webformatURL }) => <ImageGalleryItem key={id} image={webformatURL} />
          )}
        </ul>}          
      </>

    )
  }
}

// ImageGallery.propTypes = {
//   queryResult: PropTypes.arrayOf(PropTypes.object).isRequired
// }
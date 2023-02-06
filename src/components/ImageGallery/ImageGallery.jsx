import { Component } from "react";
import css from './ImageGallery.module.css';
// import { Circles } from 'react-loader-spinner';
import  {ImageGalleryItem}  from '../ImageGalleryItem/ImageGalleryItem';

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
    const { searchQuery } = this.props;

    return (
      <>
        {/* {error && <h2>Enter correct search request!</h2>} */}
          <p>{searchQuery}</p>
        {/* {loading &&
          <div className={css.loading_wraper}>
            <Circles
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>} */}
        

        {images && <ul className={css.ImageGallery}>
          {images.map(({ id, webformatURL }) => <ImageGalleryItem key={id} image={webformatURL} />
          )}
        </ul>}          
      </>

    )
  }
}
import { Component } from "react";
import css from './ImageGallery.module.css';
import { Circles } from 'react-loader-spinner'

export default class ImageGalleryItem extends Component {

  state = {
    result: null,
    error: null,
    loading: false
  }

  // componentDidUpdate(prevProps, prevState) {

  //   if (prevProps.searchQuery !== this.props.searchQuery) {
  //     this.setState({ loading: true });
  //     fetch(`https://pixabay.com/api/?q=${this.props.searchQuery}&page=1&key=29908422-6515e5e6655e3a8d0d58918bc&image_type=photo&orientation=horizontal&per_page=12`)
  //       .then(res => res.json())
  //       .then(res => this.setState({ result: res.hits[0] }))
  //       .catch(error => this.setState({ error }))
  //       .finally(() => this.setState({ loading: false }));
  //   }
  // }

  render() {
    const { loading, result, error } = this.state;
    const { searchQuery } = this.props;

    return (
      <>
        {error && <h2>Enter correct search request!</h2>}
        {/* <div className={css.ImageGalleryItem}> */}

          {/* <img src="" alt="" className={css.ImageGalleryItem_image} /> */}
          <p>{searchQuery}</p>
        {loading &&
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
          </div>}
          {result && (
            <div>
              <p>{result.user}</p>
              < img src={result.previewURL} />
            </div>
          )}
      </>

    )
  }
}
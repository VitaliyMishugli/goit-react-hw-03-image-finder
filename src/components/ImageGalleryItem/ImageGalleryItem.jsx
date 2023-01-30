import { Component } from "react";
import css from './ImageGalleryItem.module.css';

export default class ImageGalleryItem extends Component{
  
  state = {
    result: null,
    loading: false
  }

  async componentDidUpdate(prevProps, prevState) {
   
    if (prevProps.searchQuery !== this.props.searchQuery) {
      this.setState({ loading: true });
      await fetch(`https://pixabay.com/api/?q=${this.props.searchQuery}&page=1&key=29908422-6515e5e6655e3a8d0d58918bc&image_type=photo&orientation=horizontal&per_page=12`)
        .then(res => res.json())
        .then(res => this.setState({ result: res.hits[0] }))
        .finally(()=>this.setState({loading: false}));
    }
  }

  render() {
    return (
      <div className={css.ImageGalleryItem}>
        {/* <img src="" alt="" className={css.ImageGalleryItem_image} /> */}
        <p>{this.props.searchQuery}</p>
        {this.state.loading && <div>Loading...</div>}
        {this.state.result && (
          <div>
            <p>{this.state.result.user}</p>
            < img src={this.state.result.previewURL} />
          </div>
          )}
      </div>
    )
  }
}
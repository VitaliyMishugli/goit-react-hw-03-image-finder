import { Component } from "react";
import { ToastContainer } from "react-toastify";
import Searchbar from "./Searchbar/Searchbar";
import  ImageGalleryItem  from './ImageGalleryItem/ImageGalleryItem';

export default class App extends Component {
  state = {
    result: null,
    searchName: ''
  }

  handleSubmitForm = (searchName) => {
    // console.log(searchName);
    this.setState({
      searchName
    })
  }

  // async componentDidMount() {
  //   await fetch(`https://pixabay.com/api/?q=${this.state.searchName}&page=1&key=29908422-6515e5e6655e3a8d0d58918bc&image_type=photo&orientation=horizontal&per_page=12`)
  //     .then(res => res.json())
  //     .then(res => this.setState({ result: res.hits[0] }));
  //   // console.log(this.state.result, Date.now());
  // }

  render() {
    return (
      <>
        <Searchbar submit={this.handleSubmitForm} />
        {/* {this.state.result ? <h2>{this.state.result.id}</h2> : <h2>Очікуємо завантаження...</h2>}
        {this.state.result ? < img src={this.state.result.previewURL} /> : <h2>Тут має бути зображення...</h2>} */}
        <ImageGalleryItem searchQuery={ this.state.searchName} />
        <ToastContainer autoClose={3000} />
      </>
    );
  }

};

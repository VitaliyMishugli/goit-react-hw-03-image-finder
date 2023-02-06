import { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from './ImageGallery/ImageGallery';
import API from '../services/api';

export default class App extends Component {
  state = {
    result: null,
    searchName: '',
    status:'idle'
  }
  // 'idle'
  // 'pending'
  // 'resolved'
  // 'rejected'

  handleSubmitForm = (searchName) => {
    this.setState({
      searchName
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchName !== this.state.searchName) { 
      API.apiRequest(this.state.searchName)
        .then(({ hits }) => this.setState({ result: hits }))
        .catch(error => this.setState({ error }))
        // .finally(() => this.setState({ loading: false }));
    }
  }

  render() {
    const { result } = this.state;
    return (
      <>
        <Searchbar submit={this.handleSubmitForm} />
        <ImageGallery queryResult={result} />
      </>
    );
  }

};

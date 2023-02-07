import { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from './ImageGallery/ImageGallery';
import { Loader } from "./Loader/Loader";
import API from '../services/api';

export default class App extends Component {
  state = {
    page: 1,
    result: null,
    searchName: '',
    status: 'idle',

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
    const { searchName, page } = this.state;
    if (prevState.searchName !== this.state.searchName) {
      this.setState({ status: 'pending' });
      API.apiRequest(searchName, page)
        .then(({ hits }) => this.setState({ result: hits, status: 'resolved'}))
        .catch(error => this.setState({ error , status: 'rejected'}))
    }
  }

  render() {
    const { result, status } = this.state;
    if (status === 'idle') {
      return (
        <>
          <Searchbar submit={this.handleSubmitForm} />
          <h2>Enter search request.</h2>
        </>
      )
    }

    if (status === 'pending') {
      return (
        <>
          <Searchbar submit={this.handleSubmitForm} />
          <Loader />
        </>)
    }

    if (status === 'rejected') {
      return <h2>Enter correct search request!</h2>
    }

    if (status === 'resolved') {
      return (
        <>
          <Searchbar submit={this.handleSubmitForm} />
          <ImageGallery queryResult={result} />
        </>
      )
    }
  }
};

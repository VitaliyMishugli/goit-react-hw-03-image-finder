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

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.searchName !== this.state.searchName) {
      console.log(this.state.result);
      // this.setState({ loading: true });
      await API.apiRequest(this.state.searchName)
        .then(res => res.json())
        .then(response => this.setState({ result: response }))
        .catch(error => this.setState({ error }))
        // .finally(() => this.setState({ loading: false }));
    }
    console.log(this.state.result);
  }

  render() {
    return (
      <>
        <Searchbar submit={this.handleSubmitForm} />
        <ImageGallery queryResult={ this.state.result} />
      </>
    );
  }

};

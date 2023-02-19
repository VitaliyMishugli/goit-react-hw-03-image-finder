import { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from './ImageGallery/ImageGallery';
import { Loader } from "./Loader/Loader";
import { Button } from "./Button/Button";
// import { Modal } from "./Modal/Modal";
import API from '../services/api';

export default class App extends Component {
  state = {
    page: 1,
    result: null,
    searchName: '',
    isLoading: false,
  }

  handleSubmitForm = (searchName) => {
    console.log(searchName);
    this.setState({
      searchName,
      page: 1,
      result: null,
    })
  }

  pageIncrement = () => {
    // e.preventDefault();
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  }

  componentDidUpdate(_, prevState) {
    const { searchName, page, result } = this.state;
    if (prevState.page !== this.state.page || prevState.searchName !== this.state.searchName) {
      console.log('Fetch data');
      // if (prevState.searchName !== this.state.searchName) {
      // this.setState({ isLoading: true });
      API.apiRequest(searchName, page)
        .then(({ hits }) => {
          this.setState({ isLoading: true });
          this.setState({ result: hits});
          if (prevState.result !== null ) {
            this.setState(prevState => ({ result: [...prevState.result,...result] }))
          }
          this.setState({ isLoading: false });
        }
        )
        .catch(error => this.setState({ error }));
      }
      // this.setState({ isLoading: false });
    // }
  }

  render() {
    const { result } = this.state;
   
      return (
        <>
          <Searchbar submit={this.handleSubmitForm} />
          <ImageGallery queryResult={result} />
          {/* {this.state.isLoading && <Loader />} */}
          {/* {!this.state.isLoading && <Button pageIncrement={this.pageIncrement} />} */}
          {/* <Button pageIncrement={this.pageIncrement} /> */}
          {/* <Modal image={ result[0].id} /> */}
        </>
      )
  }
};

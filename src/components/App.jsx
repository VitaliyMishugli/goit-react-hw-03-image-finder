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
    isLoadingMore: false,
    total: 0
  }

  handleSubmitForm = (searchName) => {
    // console.log(searchName);
    this.setState({
      searchName,
      page: 1,
      result: null,
      isLoadingMore: false,
    })
  }

  pageIncrement = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  }

  componentDidUpdate(_, prevState) {
    const { searchName, page, result, total } = this.state;
    if (prevState.page !== this.state.page || prevState.searchName !== this.state.searchName) {
      console.log('Fetch data');
      console.log(prevState.total);
      API.apiRequest(searchName, page)
        .then(({ hits, totalHits }) => {
          // ===
          this.setState({ total: totalHits });
          // ===
          if (totalHits === 0) {
            alert("There's no answer by your request.");
            return;
          }
          else {
            this.setState({ isLoading: true, result: hits });
            // this.setState({ result: hits });

            if (prevState.result !== null) {
              this.setState(prevState => ({ result: [...result, ...prevState.result] }))
            }
            this.setState({ isLoading: false, isLoadingMore: true });
            
          }
          // this.setState({ isLoading: true });
          // this.setState({ result: hits, total: totalHits });
          
          // if (prevState.result !== null ) {
          //   this.setState(prevState => ({ result: [...result, ...prevState.result] }))
          // }
          // this.setState({ isLoading: false, isLoadingMore: true });
        }
        )
        .catch(error => this.setState({ error }));
      }
  }

  render() {
    const { result } = this.state;
   
      return (
        <>
          <Searchbar submit={this.handleSubmitForm} />
          <ImageGallery queryResult={result} />
          {this.state.isLoading && <Loader />}
          {this.state.isLoadingMore && <Button pageIncrement={this.pageIncrement} />}
          {/* <Modal image={ result[0].id} /> */}
        </>
      )
  }
};

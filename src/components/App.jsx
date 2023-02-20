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
      total: prevState.total - 12
    }));
  }

  async componentDidUpdate(_, prevState) {
    const { searchName, page, result, total } = this.state;
    if (prevState.page !== this.state.page || prevState.searchName !== this.state.searchName) {
      console.log('Fetch data');
      try {
        const { hits, totalHits } = await API.apiRequest(searchName, page)
        this.setState({ isLoading: true, result: hits });
        if (totalHits === 0) {
          alert("There's no answer by your request.");
          return;
        }
        if (totalHits > 0) {
          this.setState({ isLoadingMore: true });
          console.log('Hello')
        }
        if (this.state.total === 0) {
          this.setState({ total: totalHits });
        }

        // else {
        // if (total === 0) {
        //   this.setState({ total: totalHits });
        //   // console.log("Записали тотал хітс в тотал");
        // }
        
        if (total <= 0) {
          console.log(total, 'Нічого в тотал не пишемо');
          this.setState({ isLoadingMore: false });
          console.log("Кнопку забрали")
          console.log(this.state.isLoadingMore)
          // alert('Картинок більше немає');
        }
        if (prevState.result !== null && result !== null) {
          this.setState(prevState => ({ result: [...result, ...prevState.result] }));
          // this.setState({ isLoading: false, isLoadingMore: true });
        }
        this.setState({ isLoading: false });
        // }
      }
      // }

      catch (error) { this.setState({ error }) };
    }
  }

  render() {
    const { result, isLoading, isLoadingMore, total } = this.state;
    return (
      <>
        <Searchbar submit={this.handleSubmitForm} />
        <ImageGallery queryResult={result} />
        {isLoading && <Loader />}
        {isLoadingMore && <Button pageIncrement={this.pageIncrement} />}
        {/* <Modal image={ result[0].id} /> */}
      </>
    )
  }
};

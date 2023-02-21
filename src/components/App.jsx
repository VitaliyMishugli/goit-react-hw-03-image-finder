import { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from './ImageGallery/ImageGallery';
import { Loader } from "./Loader/Loader";
import { Button } from "./Button/Button";
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

  async componentDidUpdate(_, prevState) {
    const { searchName, page} = this.state;
    if (prevState.page !== this.state.page ||
      prevState.searchName !== this.state.searchName) {
      console.log('Fetch data');
      try {
        this.setState({ isLoading: true });

        const { hits, totalHits } = await API.apiRequest(searchName, page);

        if (totalHits === 0) {
          alert("There's no answer by your request.");
          this.setState({ isLoading: false });
          return;
        }

        this.setState(prevState => ({
          result: page === 1 ? hits : [...prevState.result, ...hits],
          total: page === 1
            ? totalHits - hits.length
            : totalHits - [...prevState.result, ...hits].length,
        }));

        this.setState({ isLoading: false });
      }
      catch (error) { this.setState({ error }) };
    }
  }

  render() {
    const { result, isLoading,total } = this.state;
    return (
      <>
        <Searchbar submit={this.handleSubmitForm} />
        <ImageGallery queryResult={result} />
        {isLoading && <Loader />}
        {!!total && <Button pageIncrement={this.pageIncrement} />}
       
      </>
    )
  }
};

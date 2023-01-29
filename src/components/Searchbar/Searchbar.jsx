import { Component } from "react";
import css from './Searchbar.module.css';
// import { toast } from 'react-toastify';

export default class Searchbar extends Component{
  state = {
    searchName: '',
  }

  handleSearchName = (event) => {
    this.setState({
      searchName: event.currentTarget.value.toLowerCase()
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.searchName.trim() === '') {
      return alert("Enter search query!");
    }
    this.props.submit(this.state.searchName);
    this.setState({ searchName: '' });
  }

  render() {
    return (
      <header className="searchbar">
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.SearchForm_button}>
            <span className={css.SearchForm_button__label}>Search</span>
          </button>

          <input
            onChange={this.handleSearchName}
            className={css.SearchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    )
  }
}
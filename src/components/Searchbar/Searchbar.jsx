import { Component } from "react";
import css from './Searchbar.module.css';
import { ImSearch } from "react-icons/im";
import PropTypes from 'prop-types';

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
      <header className={css.searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.SearchForm_button}>
            <ImSearch />
            {/* <span className={css.SearchForm_button__label}></span> */}
          </button>

          <input
            value={this.state.searchName}
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

Searchbar.propTypes = {
  submit: PropTypes.func.isRequired
}
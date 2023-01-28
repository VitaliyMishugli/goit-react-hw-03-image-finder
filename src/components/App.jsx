import { Component } from "react";

export default class App extends Component {

  state = {
    result: null,
  }

  async componentDidMount() {
    await fetch('https://pixabay.com/api/?q=cat&page=1&key=29908422-6515e5e6655e3a8d0d58918bc&image_type=photo&orientation=horizontal&per_page=12')
      .then(res => res.json())
      .then(res => this.setState({ result: res.hits[0] }));
    console.log(this.state.result, Date.now());
  }

  render() {
    return (
      <>
        {this.state.result ? <h2>{this.state.result.id}</h2> : <h2>Очікуємо завантаження...</h2> }
        {/* < img src={`${this.result.webformatURL}`} />
        <h2>{ this.result.id}</h2> */}
      </>
    );
  }

};

import React from 'react';
import './App.css';
import Image from './components/Image';

class App extends React.Component {
  constructor() {
    super();

    this.fetchData = this.fetchData.bind(this);
    this.state = {
      source: [],
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const responseJSON = await response.json();
    const imgSrc = responseJSON.message;
    this.setState(
      (prevState) => { return (
        { source: [...prevState.source, imgSrc] }
      )}
    );
  }

  render() {
    const { source } = this.state;
    return (
      <div className="dogs-container">
        <button onClick={ this.fetchData }>Add dog</button>
        { source ? source.map((src) => { return <Image src={ src } key={ src } /> }) : 'Loading...' }
      </div>
    )
  }
}

export default App;

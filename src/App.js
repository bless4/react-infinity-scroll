import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import ImageGrid from './components/ImageGrid';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <ImageGrid />
        </main>
      </div>
    );
  }
}

export default App;

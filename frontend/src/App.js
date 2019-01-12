import React, { Component } from 'react';
import Navbar from './navbar/navbar';
import Questions from './questions/questions';

class App extends Component {
  render() {
    return (
        <div>
            <Navbar/>
            <Questions/>
        </div>
    );
  }
}

export default App;

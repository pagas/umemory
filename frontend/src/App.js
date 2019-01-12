import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import Navbar from './navbar/navbar';
import Questions from './questions/questions';
import Question from './question/question';

class App extends Component {
  render() {
    return (
        <div>
            <Navbar/>
            <Route exact path='/' component={Questions}/>
            <Route exact path='/question/:questionId' component={Question}/>
        </div>
    );
  }
}

export default App;

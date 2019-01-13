import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import Navbar from './navbar/navbar';
import Questions from './questions/questions';
import Question from './question/question';
import Callback from './callback';

class App extends Component {
  render() {
    return (
        <div>
            <Navbar/>
            <Route exact path='/' component={Questions}/>
            <Route exact path='/question/:questionId' component={Question}/>
            <Route exact path='/callback' component={Callback}/>
        </div>
    );
  }
}

export default App;

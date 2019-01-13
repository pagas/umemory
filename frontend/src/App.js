import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import Navbar from './navbar/NavBar';
import Questions from './Questions/Questions';
import Question from './Question/Question';
import Callback from './callback';
import NewQuestion from './NewQuestion/NewQuestion';
import SecuredRoute from './SecureRoute/SecureRoute';

class App extends Component {
  render() {
    return (
        <div>
            <Navbar/>
            <Route exact path='/' component={Questions}/>
            <Route exact path='/question/:questionId' component={Question}/>
            <Route exact path='/callback' component={Callback}/>
            <SecuredRoute path='/new-question' component={NewQuestion} />
        </div>
    );
  }
}

export default App;

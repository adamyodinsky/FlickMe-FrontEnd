import React from 'react';
import './App.css';
import Background from './components/background';
import Landing from './components/pages/landing/landing';
import Movie from './components/pages/movie/movie';

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
        <div>
          <Background/>
          <Router>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/movie" component={Movie} />
            </Switch>
          </Router>
        </div>
    )
  }
}

export default App;

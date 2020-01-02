import React from 'react';
import './App.css';
import Background from './components/background/background';
import Landing from './components/pages/landing/landing';
import Movie from './components/pages/movie/movie';
import NoMatch from './components/pages/noMatch/NoMatch';
import configs from './config/config';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';

class App extends React.Component {

  state = {
    movie: 'init',
    firstTimer: true
  };


  getMovie = async () => {
    const url =  `http://${configs.backEndHost}:${configs.backEndPort}/${configs.backEndApi}/movie?from_year=1999&to_year=2019&from_quality=1&to_quality=100`;
    try {
      const response = await axios.get(url);
      this.setState({
        movie :response.data,
      });
    } catch (e) {
      console.log('ERROR: could not get object');
    }
  };

  componentDidMount() {
      this.getMovie();
  }


  render() {
    return (
        <div>
          <Background/>
          <Router>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/movie" render={(props) => (<Movie {...props} getMovie={this.getMovie} movie={this.state.movie} />)
              }/>
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </div>
    )
  }
}

export default App;

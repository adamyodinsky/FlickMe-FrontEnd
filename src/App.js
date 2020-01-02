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
    movie: {
      fullName: 'lalalalala'
    }
  };

  getMovie = async () => {
    const url =  `http://${configs.backEndHost}:${configs.backEndPort}/${configs.backEndApi}/movie`;
    try {
      const response = await axios.get(url);
      // TODO remove this when in prod
      console.log(response.data);
      console.log(url);

      this.setState({
        movie :response.data,
      });

    } catch (e) {
      console.log(e.message);
    }
  };

  render() {
    return (
        <div>
          <Background/>
          <Router>
            <Switch>
              <Route exact path="/" render={(props) => (<Landing {...props} getMovie={this.getMovie} />)}/>
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

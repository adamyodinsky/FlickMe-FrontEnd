import React from 'react';
import './App.css';
import Background from './components/background/background';
import Landing from './components/pages/landing/landing';
import Movie from './components/pages/movie/movie';
import NoMatch from './components/pages/noMatch/NoMatch';
import configs from './config/config';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import { useLocalStore } from 'mobx-react';

const StoreContext = React.createContext();

const StoreProvider = ({children}) => {
  const store = useLocalStore(()=> ({
    movie: 'init',
    quote: {
      quote: '',
      author: ''
    },
    getMovie: async() => {
      const url =  `http://${configs.backEndHost}:${configs.backEndPort}/${configs.backEndApi}/movie?from_year=1999&to_year=2019&from_quality=1&to_quality=100`;
      try {
        const response = await axios.get(url);
        console.log(response.data);
        store.movie = response.data;
      } catch (e) {
        console.log('ERROR: could not get movie object');
      }
    },
    getQuote: async () => {
      const url = 'https://quotes.rest/qod';
      try {
        const response = await axios.get(url);
        store.quote = {
          quote: response.data.contents.quotes[0].quote,
          author: response.data.contents.quotes[0].author
        }
      } catch (e) {
        console.log("ERROR, can't get quote!");
      }
    }
  }));

  return (
      <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  )
};

class App extends React.Component {

  render() {
    return (
        <StoreProvider>
        <div>
          <Background/>
          <Router>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/movie" name="Movie" component={Movie} />
              <Route name="404 NOT FOUND" component={NoMatch} />
            </Switch>
          </Router>
        </div>
        </StoreProvider>
    )
  }
}

export default App;

import React, {Component} from 'react';
import './App.css';
import MochooButton from './components/MochooButton/MochooBotton';
import Header from './components/Header/Header';
import Movie from './components/Movie/Movie';
import Filter from './components/Filter/Filter';
import {default as configs} from './config/config';
import axios from 'axios';
// import InputRange from 'react-input-range';


class App extends Component {


  state = {
    showMovies : false,
    value: { min: 2000, max: 2019 }
  };

  getMovie = async () => {
    const url =  `http://${configs.backEndHost}:${configs.backEndPort}/${configs.backEndApi}/movie?start=${this.state.value.min}&end=${this.state.value.max}`;

    try {
      const response = await axios.get(url);
      console.log(response.data);
      this.setState({
        movie :response.data,
        showMovies: true
      });

    } catch (e) {
      console.log(e.message);
    }
  };

  render() {
    let movies = null;

    if (this.state.showMovies) {
      movies = (
          <div>
          <Movie  movie={this.state.movie} />
      </div>
    )
    }

    return (
        <div className='App'>
          <Header/>
          <MochooButton click={() => {this.getMovie()}} />
          <Filter
              value={this.state.value}
              change={value => this.setState({ value })}
          />
          {movies}
          <footer/>
        </div>
  )
  }
}

export default App;

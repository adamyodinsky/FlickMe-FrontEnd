import React, {Component} from 'react';
import './App.css';
import MochooButton from './components/MochooButton/MochooBotton';
import Header from './components/Header/Header';
import Movie from './components/Movie/Movie';
import YearFilter from './components/Filters/yearFilter';
import ToggleFiltersButton from './components/toggleFiltersButton/toggleFiltersButton';
import {default as configs} from './config/config';
import axios from 'axios';


class App extends Component {


  state = {
    showMovies : false,
    showFilters: false,
    value: { min: 2000, max: 2019 }
  };

  toggleFilters = () => {
    this.setState({
      showFilters: !this.state.showFilters
        })
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
    let filters = null;

    if (this.state.showMovies) {
      movies = (
          <div>
          <Movie  movie={this.state.movie} />
      </div>
      )
    }

    if(this.state.showFilters) {
      filters = (
          <YearFilter
              value={this.state.value}
              change={value => this.setState({ value })}
          />
      )
    }

    return (
        <div className='App'>
          <Header/>
          <MochooButton click={() => {this.getMovie()}} />
          <ToggleFiltersButton click={this.toggleFilters}/>
          {filters}
          {movies}
          <footer/>
        </div>
  )
  }
}

export default App;

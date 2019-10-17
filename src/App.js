import React, {Component} from 'react';
import './App.css';
import MochooButton from './components/MochooButton/MochooBotton';
import Header from './components/Header/Header';
import Movie from './components/Movie/Movie';
// import YearFilter from './components/Filters/yearFilter';
import Filter from './components/Filters/Filter'
import ToggleFiltersButton from './components/toggleFiltersButton/toggleFiltersButton';
import {default as configs} from './config/config';
import axios from 'axios';
import Slider from 'rc-slider';


const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const wrapperStyle = { width: 400, margin: 50 };


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
          <div style={wrapperStyle}>
            <Range
                click={() => }
                min={1920}
                max={2019}
                defaultValue={[1999, 2019]}
                tipFormatter={value => `${value}`}
                allowCross={false}
            />
          </div>
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

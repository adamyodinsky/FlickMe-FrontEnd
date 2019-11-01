import React, {Component} from 'react';
import './App.css';
import MochooButton from '../components/MochooButton/MochooBotton';
// import Header from './components/Header/Header';
import Movie from '../components/Movie/Movie';
import ToolTipFilter from '../components/Filters/ToolTipFilter'
import Filter from '../components/Filters/Filter'
import ToggleFiltersButton from '../components/toggleFiltersButton/toggleFiltersButton';
import {default as configs} from '../config/config';
import axios from 'axios';
import Marks from '../components/Filters/marks';

class App extends Component {

  state = {
    showMovies : false,
    showFilters: false,
    yearValue: [2000, 2019],
    qualityValue: [0, 100]
  };

  toggleFilters = () => {
    this.setState({
      showFilters: !this.state.showFilters
        })
  };

  getMovie = async () => {
    let fromQuality = 100 - this.state.qualityValue[1];
    let toQuality = 100 - this.state.qualityValue[0];

    console.log(fromQuality +" "+toQuality );
    const url =  `http://${configs.backEndHost}:${configs.backEndPort}/${configs.backEndApi}/movie?from_year=${this.state.yearValue[0]}&to_year=${this.state.yearValue[1]}&from_quality=${fromQuality}&to_quality=${toQuality}`;
    try {
      const response = await axios.get(url);
      // TODO remove this when in prod
      console.log(response.data);
      console.log(url);
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
          <div>
            <ToolTipFilter
                title='Year'
                defaultMin={this.state.yearValue[0]}
                defaultMax={this.state.yearValue[1]}
                value={this.state.yearValue}
                min={1920}
                max={2019}
                marks={Marks.year}
                onChange={(value) => {this.setState({ yearValue: value})}}
            />
            <Filter
                title='Quality'
                defaultMin={this.state.qualityValue[0]}
                defaultMax={this.state.qualityValue[1]}
                value={this.state.qualityValue}
                min={0}
                max={100}
                onChange={(value) => {this.setState({ qualityValue : value})}}
                marks={Marks.quality}
            />
          </div>
      )
    }

    return (
        <div className='App'>
          {/* <Header/> */}
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

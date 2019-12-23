import React, {Component} from 'react';
import './App.scss';
import {default as configs} from './config/config';
import Landing from './newComponent/Landing';


class App extends Component {
  //
  // state = {
  //   showMovies : false,
  //   showFilters: false,
  //   yearValue: [2000, 2019],
  //   qualityValue: [0, 100]
  // };
  //
  //
  // getMovie = async () => {
  //   let fromQuality = 100 - this.state.qualityValue[1];
  //   let toQuality = 100 - this.state.qualityValue[0];
  //
  //   console.log(fromQuality +" "+toQuality );
  //   const url =  `http://${configs.backEndHost}:${configs.backEndPort}/${configs.backEndApi}/movie?from_year=${this.state.yearValue[0]}&to_year=${this.state.yearValue[1]}&from_quality=${fromQuality}&to_quality=${toQuality}`;
  //   try {
  //     const response = await axios.get(url);
  //     // TODO remove this when in prod
  //     console.log(response.data);
  //     console.log(url);
  //     this.setState({
  //       movie :response.data,
  //       showMovies: true
  //     });
  //
  //   } catch (e) {
  //     console.log(e.message);
  //   }
  // };

  // eslint-disable-next-line react/require-render-return
  render() {
   return (
       <Landing/>
       );
  }
}

export default App;

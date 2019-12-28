import React from 'react';
import './App.css';
// import Movie from './components/pages/movie/movie';
import Background from './components/background';
import Landing from './components/pages/landing/landing';
class App extends React.Component {
  render() {
    return (
        <div>
          <Background/>
          <Landing/>
          {/*<Movie/>*/}
        </div>
    )
  }
}
export default App;

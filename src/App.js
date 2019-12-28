import React from 'react';
import './App.css';
import Background from './components/background';
// import Landing from './components/pages/landing/landing';
import Movie from './components/pages/movie/movie';



class App extends React.Component {
  render() {
    return (
        <div>
          <Background/>
          {/*<Landing/>*/}
          <Movie/>
        </div>
    )
  }
}
export default App;

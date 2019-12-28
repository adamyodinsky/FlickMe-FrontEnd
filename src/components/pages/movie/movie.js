import React from 'react';
import HeaderLogo from './headerLogo';
import './movie.css'
import Trailer from './trailer';
import MovieTitle from './movieTitle';
import BtnBox from './BtnBox';

const Movie = () => {
  return(
        <div className="main">
          <HeaderLogo/>
          <Trailer/>
          <MovieTitle/>
          <BtnBox/>
        </div>
  );
};

export default Movie;

import React from 'react';
import movie from './movie.module.css'
import HeaderLogo from './headerLogo/headerLogo';
import Trailer from './trailer/trailer';
import MovieTitle from './movieTitle/movieTitle';
import BtnBox from './btnBox/btnBox';

const Movie = () => {
  return(
        <div className={movie.main}>
          <HeaderLogo/>
          <Trailer/>
          <MovieTitle/>
          <BtnBox/>
        </div>
  );
};

export default Movie;

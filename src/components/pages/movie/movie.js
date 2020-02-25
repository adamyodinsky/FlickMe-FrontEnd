import React from 'react';
import movie from './movie.module.css'
import HeaderLogo from './headerLogo/headerLogo';
import Trailer from './trailer/trailer';
import MovieTitle from './movieTitle/movieTitle';
import BtnBox from './btnBox/btnBox';

const Movie = (props) => {
  const store = React.useContext(StoreContext);

  return(
        <div className={movie.main}>
          <HeaderLogo/>
          <Trailer trailer={props.movie.trailer}/>
          <MovieTitle fullName={props.movie.fullName}/>
          <BtnBox getMovie={props.getMovie}/>
        </div>
  );
};

export default Movie;

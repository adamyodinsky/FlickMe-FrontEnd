import React from 'react';
import movieTitle from './movieTitle.module.css'

const MovieTitle = (props) => {
  return (
      <div className={movieTitle.movie_title + ' ' + movieTitle.shadow}>
        <h1>{props.fullName}</h1>
      </div>
  )
};

export default MovieTitle;

import React from 'react';
import movieTitle from './movieTitle.module.css'

const MovieTitle = () => {
  return (
      <div className={movieTitle.movie_title + ' ' + movieTitle.shadow}>
        <h1>The Movie Logo 2019</h1>
      </div>
  )
};

export default MovieTitle;

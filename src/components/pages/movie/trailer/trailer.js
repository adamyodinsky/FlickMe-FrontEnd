import React from "react";
import trailer from './trailer.module.scss';

const Trailer = (props) => {

  let trailerId = `${props.trailer}`.replace('/watch?v=', '');

  return (
    <div className={trailer.trailer + ' ' + trailer.shadow}>
      <iframe
        title="trailer"
        height="100%"
        width="60%"
        src={`https://www.youtube.com/embed/${trailerId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default Trailer;

import React from "react";
import trailer from './trailer.module.css';

const Trailer = () => {
  return (
    <div className={trailer.trailer + ' ' + trailer.shadow}>
      <iframe
        title="trailer"
        height="100%"
        width="60%"
        src="https://www.youtube.com/embed/XwRg3mhIbkw"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default Trailer;

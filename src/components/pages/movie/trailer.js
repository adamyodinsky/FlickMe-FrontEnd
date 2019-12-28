import React from "react";
import "./movie.css";

const Trailer = () => {
  return (
    <div className="trailer shadow">
      <iframe
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

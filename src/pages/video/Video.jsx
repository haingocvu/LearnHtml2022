import React from 'react';

function Video() {
  return (
    <div>
      <video width="320" height="240" controls autoPlay muted>
        <source
          src="https://www.w3schools.com/html/movie.mp4"
          type="video/mp4"
        />
        <source
          src="https://www.w3schools.com/html/movie.ogg"
          type="video/ogg"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Video;

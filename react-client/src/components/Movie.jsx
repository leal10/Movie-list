import React from 'react';

const Movie = (props) => (
  <div>
    {props.title}
    <button onClick={(event) => {props.toggleHandler(event, props.title)}}>Watched</button>
  </div>
)
export default Movie;
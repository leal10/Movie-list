import React from 'react';
import Movie from './Movie.jsx'

const MovieList = (props) => (
  <div>
    {props.movies.map((movie, i) => {
      return <Movie key={i} title={movie.title} toggleHandler={props.toggleHandler}/>
    })}
  </div>
)

export default MovieList;
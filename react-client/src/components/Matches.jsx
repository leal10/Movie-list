import React from 'react';
import Movie from './Movie.jsx'

const Matches = (props) => (
  <div>
    {props.matches.map((match, i) => {
      return <Movie key={i} title={match.title} toggleHandler={props.toggleHandler}/>
    })}
  </div>
)

export default Matches;
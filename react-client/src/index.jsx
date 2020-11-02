import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import MovieList from './components/MovieList.jsx'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        { title: 'Mean Girls' },
        { title: 'Hackers' },
        { title: 'The Grey' },
        { title: 'Sunshine' },
        { title: 'Ex Machina' },
      ]
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <h2>Movie List</h2>
        <MovieList movies={this.state.movies}/>
      </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import MovieList from './components/MovieList.jsx';
import Matches from './components/Matches.jsx';


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
      ],
      searchInput: ''
    }
    //handlers
    this.inputHandler = this.inputHandler.bind(this);
    this.sumbitButtonHandler = this.sumbitButtonHandler.bind(this);
  }

  componentDidMount() {

  }

  //handler for search Input
  inputHandler(event) {
    event.preventDefault();
    this.setState({searchInput: event.target.value})
  }

  //handler for click of button
  sumbitButtonHandler(event) {
    event.preventDefault();
    console.log("pressed");

    const matches = this.state.movies.filter(match => match.title === this.state.searchInput);

    this.setState({movieMatch: matches})

  }

  render() {
    return (
      <div>
        <h2>Movie List</h2>
        <form>
          <input onChange={this.inputHandler} type='text' placeholder='Search movie title'></input>
          <button onClick={this.sumbitButtonHandler}>Submit</button>
        </form>
        <MovieList movies={this.state.movies}/>

        <h2>These are the matched movies</h2>
        {(this.state.movieMatch !== undefined) ? <Matches matches={this.state.movieMatch}/> : <div>There is no Match</div>}

      </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
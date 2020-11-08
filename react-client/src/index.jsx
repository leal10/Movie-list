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
        { title: 'Mean Girls', watched: false },
        { title: 'Hackers', watched: false },
        { title: 'The Grey', watched: false },
        { title: 'Sunshine', watched: false },
        { title: 'Ex Machina', watched: false },
      ],
      moviesWatched: [{title: 'Toy Story', watched: true}],
      searchInput: '',
      addInput: '',
      movieMatch: '',
      addedMovies: '',
      watchList: null,
      movieSelected: ''
    }
    //handlers
    this.inputHandler = this.inputHandler.bind(this);
    this.sumbitButtonHandler = this.sumbitButtonHandler.bind(this);
    this.inputAddHandler = this.inputAddHandler.bind(this);
    this.addButtonHandler = this.addButtonHandler.bind(this);
    this.watchedHandler = this.watchedHandler.bind(this);
    this.toWatchHandler = this.toWatchHandler.bind(this);
    this.toggleHandler = this.toggleHandler.bind(this);
  }

  componentDidMount() {

  }

  //handler for search Input
  inputHandler(event) {
    event.preventDefault();
    this.setState({ searchInput: event.target.value })
  }

  //handler for click of button
  sumbitButtonHandler(event) {
    event.preventDefault();
    // console.log("pressed");
    const matches = this.state.movies.filter(match => match.title === this.state.searchInput);
    this.setState({ movieMatch: matches });
  }

  //handler for add input
  inputAddHandler(event) {
    event.preventDefault();
    // console.log(event.target.value);
    this.setState({ addInput: event.target.value });
  }

  //handler for add click
  addButtonHandler(event) {
    event.preventDefault();
    // console.log('addPressed');
    const addMovies = this.state.addInput;
    this.setState({ addedMovies: [...this.state.addedMovies, { title: addMovies, watched: false }] });
  }

  watchedHandler(event) {
    event.preventDefault();
    this.setState({watchList: true})
  }

  toWatchHandler(event) {
    event.preventDefault();
    this.setState({watchList: false})
  }
 //handler to change the state of each movie to true
  toggleHandler(event, title) {
    event.preventDefault();
    const name = title;
    console.log('The button was pressed');
    this.setState({movieSelected: title});
    // this.setState({movies: {title: name, watched: false}});
  }


  render() {
    return (
      <div>
        <h2>Movie List</h2>
        <form>
          <input onChange={this.inputAddHandler} type="text" placeholder="Add movie title here"></input>
          <button onClick={this.addButtonHandler} >Add</button>
        </form>

        <form>
          <input onChange={this.inputHandler} type='text' placeholder='Search movie title'></input>
          <button onClick={this.sumbitButtonHandler}>Submit</button>
        </form>
        <MovieList movies={this.state.movies} toggleHandler={this.toggleHandler}/>

        <h2>These are the matched movies</h2>
        {(this.state.movieMatch !== '') ? <Matches matches={this.state.movieMatch} toggleHandler={this.toggleHandler} /> : <div>There is no Match</div>}

        <h2>Movies Added</h2>
        {(this.state.addedMovies === '') ? <div> No added Movies</div> : <MovieList movies={this.state.addedMovies} toggleHandler={this.toggleHandler} />}


        <form>
          <button onClick={this.watchedHandler} >Watched</button>
          <button onClick={this.toWatchHandler} >To Watch</button>
        </form>

        <h2>Test</h2>

        {(this.state.watchList === true) ?  <MovieList movies={this.state.moviesWatched} toggleHandler={this.toggleHandler}/> :  <MovieList movies={this.state.movies} toggleHandler={this.toggleHandler}/>}

      </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
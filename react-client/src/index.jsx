import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import MovieList from './components/MovieList.jsx';
import Matches from './components/Matches.jsx';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import TextField from '@material-ui/core/TextField';


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
      moviesWatched: [{ title: 'Toy Story', watched: true }],
      searchInput: '',
      addInput: '',
      movieMatch: '',
      addedMovies: '',
      watchList: null,
      movieSelected: '',
      setValue: true,
      pressed: false
    }
    //handlers
    this.inputHandler = this.inputHandler.bind(this);
    this.sumbitButtonHandler = this.sumbitButtonHandler.bind(this);
    this.inputAddHandler = this.inputAddHandler.bind(this);
    this.addButtonHandler = this.addButtonHandler.bind(this);
    this.watchedHandler = this.watchedHandler.bind(this);
    this.toWatchHandler = this.toWatchHandler.bind(this);
    this.toggleHandler = this.toggleHandler.bind(this);
    this.toggle2Handler = this.toggle2Handler.bind(this);
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
    this.setState({ pressed: true });
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
    //adds it to another array of movies
    // this.setState({ addedMovies: [...this.state.addedMovies, { title: addMovies, watched: false }] });
    //adds it to the movies
    this.setState({ movies: [...this.state.movies, { title: addMovies, watched: false }] });
  }

  watchedHandler(event) {
    event.preventDefault();
    this.setState({ setValue: false });
  }

  toWatchHandler(event) {
    event.preventDefault();
    this.setState({ setValue: true });
  }
  //handler to change the state of each movie to true
  toggleHandler(event, title) {
    event.preventDefault();
    const name = title;
    console.log('The button was pressed');
    this.setState({ movieSelected: title });
    //filter movies and return everything except the target movie
    const newArray = this.state.movies.filter(match => match.title !== title);
    this.setState({ movies: newArray });
    this.setState({ moviesWatched: [...this.state.moviesWatched, { title: title, watched: true }] });
    //set state of movies to that new array
    // this.setState({movies: {title: name, watched: false}});
  }

  //handler to move it back to movies not watched
  toggle2Handler(event, title) {
    event.preventDefault();

    const name = title;
    this.setState({ movieSelected: title });
    const newArray = this.state.moviesWatched.filter(match => match.title !== title);
    this.setState({ moviesWatched: newArray });
    this.setState({ movies: [...this.state.movies, { title: title, watched: true }] });
  }

  //if pressed is true and movieMatch is an empty string
  // no result found
  // {(this.state.pressed === true && this.state.movieMatch === '' ? <Matches matches={this.state.movieMatch} toggleHandler={this.toggleHandler} /> : <div>No result found</div>)}


  render() {

    return (
      <div>
        <Grid container spacing={3}>
          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
            <h1>Movie List</h1>
          </Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
            <form>
              {/* <input onChange={this.inputAddHandler} type="text" placeholder="Add movie title here"></input> */}
              <TextField onChange={this.inputAddHandler} size="small" id="outlined-basic" label="Add movie title here" variant="outlined" />
              {/* <button onClick={this.addButtonHandler} >Add</button> */}
              <Button color="secondary" variant="outlined" size="small" onClick={this.addButtonHandler}>
                Add
              </Button>
            </form>
          </Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={3}>
            <ButtonGroup color="secondary" aria-label="outlined secondary button group">
              <Button onClick={this.watchedHandler} >Watched</Button>
              <Button onClick={this.toWatchHandler} >To Watch</Button>
            </ButtonGroup>
          </Grid>
          <Grid item xs={3}>
            <form>
              {/* <input onChange={this.inputHandler} type='text' placeholder='Search...'></input> */}
              <TextField onChange={this.inputHandler} size="small" id="outlined-basic" label="Search..." variant="outlined" />
              {/* <button onClick={this.sumbitButtonHandler}>Go!</button> */}
              <Button color="secondary" variant="outlined" size="small" onClick={this.sumbitButtonHandler}>Go!</Button>
            </form>
          </Grid>
          <Grid item xs={3}></Grid>

          {/* {(this.state.setValue === false) ?  <MovieList movies={this.state.moviesWatched} toggleHandler={this.toggle2Handler}/> :  <MovieList movies={this.state.movies} toggleHandler={this.toggleHandler}/>} */}
          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
            {(this.state.pressed === true
              ?
              <Matches matches={this.state.movieMatch} toggleHandler={this.toggleHandler} />
              :
              (this.state.setValue === false) ? <MovieList movies={this.state.moviesWatched} toggleHandler={this.toggle2Handler} /> : <MovieList movies={this.state.movies} toggleHandler={this.toggleHandler} />
            )}
          </Grid>
          <Grid item xs={3}></Grid>

          {/* {(this.state.pressed === true && this.state.movieMatch === '' ? <Matches matches={this.state.movieMatch} toggleHandler={this.toggleHandler} /> : <div>No result found</div>)} */}

          {/* <MovieList movies={this.state.movies} toggleHandler={this.toggleHandler}/> */}

          {/* <h2>These are the matched movies</h2>
        {(this.state.movieMatch !== '') ? <Matches matches={this.state.movieMatch} toggleHandler={this.toggleHandler} /> : <div>There is no Match</div>} */}

          {/* <h2>Movies Added</h2>
        {(this.state.addedMovies === '') ? <div> No added Movies</div> : <MovieList movies={this.state.addedMovies} toggleHandler={this.toggleHandler} />} */}


          {/* <form>
          <button onClick={this.watchedHandler} >Watched</button>
          <button onClick={this.toWatchHandler} >To Watch</button>
        </form> */}

          {/* <h2>Test</h2> */}

          {/* {(this.state.setValue === false) ?  <MovieList movies={this.state.moviesWatched} toggleHandler={this.toggle2Handler}/> :  <MovieList movies={this.state.movies} toggleHandler={this.toggleHandler}/>} */}
        </Grid>
      </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
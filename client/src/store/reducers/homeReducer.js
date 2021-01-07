const initialState = {
  movies: [],
  movieIsLoaded: false,
  movieError: null
}

function homeReducer( state = initialState, action ) {
  switch(action.type) {
    case 'home/setMovies':
      return { ...state, movies: action.movies }
    case 'home/setMovieIsLoaded':
      return { ...state, movieIsLoaded: action.movieIsLoaded }
    case 'home/setMovieError':
      return { ...state, movieError: action.movieError }
    default:
      return state
  }
}

export default homeReducer;

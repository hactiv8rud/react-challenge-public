const initialState = {
  movies: [],
  moviesIsLoaded: false,
  moviesError: null
}

function homeReducer( state = initialState, action ) {
  switch(action.type) {
    case 'home/setMovies':
      return { ...state, movies: action.movies }
    case 'home/setMoviesIsLoaded':
      return { ...state, moviesIsLoaded: action.moviesIsLoaded }
    case 'home/setMoviesError':
      return { ...state, moviesError: action.moviesError }
    default:
      return state
  }
}

export default homeReducer;

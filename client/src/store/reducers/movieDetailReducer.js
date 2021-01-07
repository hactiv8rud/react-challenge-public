const initialState = {
  movieDetail: {},
  movieDetailIsLoaded: false,
  movieDetailError: null
}

function homeReducer( state = initialState, action ) {
  switch(action.type) {
    case 'movieDetail/setMovieDetail':
      return { ...state, movieDetail: action.movieDetail }
    case 'movieDetail/setMovieDetailIsLoaded':
      return { ...state, movieDetailIsLoaded: action.movieDetailIsLoaded }
    case 'movieDetail/setMovieDetailError':
      return { ...state, moviesDetailError: action.movieDetailError }
    default:
      return state
  }
}

export default homeReducer;

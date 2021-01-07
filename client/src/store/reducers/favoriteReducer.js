const initialState = {
  favoriteIds: [],
  favorites: [],
  favoriteIsLoaded: false,
  favoriteError: null,
  filteredfavorites: [],
  filteredFavoriteIsLoaded: false,
  filteredFavoriteError: null
}

function favoriteReducer( state = initialState, action ) {
  switch(action.type) {
    case 'favorites/addFavoriteId':
      return { ...state, favoriteIds: state.favoriteIds.concat(action.favoriteId) }
    case 'favorites/deleteFavoriteId':
      return { ...state, 
        favoriteIds: [
          ...state.favoriteIds.slice(0, action.favoriteId),
          ...state.favoriteIds.slice(action.favoriteId + 1)
        ]
      }
    case 'favorites/setFavorites':
      return { ...state, favorites: action.favorites }
    case 'favorites/setFavoriteIsLoaded':
      return { ...state, favoriteIsLoaded: action.favoriteIsLoaded }
    case 'favorites/setFavoriteError':
      return { ...state, favoriteError: action.favoriteError }
    case 'favorites/setFilteredFavorites':
      return { ...state, filteredFavorites: action.filteredFavorites }
    case 'favorites/setFilteredFavoriteIsLoaded':
      return { ...state, filteredFavoriteIsLoaded: action.filteredFavoriteIsLoaded }
    case 'favorites/setFilteredFavoriteError':
      return { ...state, filteredFavoriteError: action.filteredFavoriteError }
    default:
      return state
  }
}

export default favoriteReducer;

const initialState = {
  favorites: []
}

function favoriteReducer( state = initialState, action ) {
  switch(action.type) {
    case 'favorites/addFavorite':
      return { ...state, favorites: [ ...state.favorites.concat(action.favorite) ]
      }
    case 'favorites/deleteFavorite':
      return { ...state,
        favorites: [
          ...state.favorites.slice(0, action.favoriteIndex),
          ...state.favorites.slice(action.favoriteIndex + 1)
        ]
      }
    default:
      return state
  }
}

export default favoriteReducer;

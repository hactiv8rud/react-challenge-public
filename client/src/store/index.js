const { createStore } = require('redux');

const initialState = {
  favoriteIds: [],
  searchKey: '',
  filteredfavorites: []
}

function reducer( state = initialState, action ) {
  switch(action.type) {
    case 'favoriteIds/addFavoriteId':
      return { ...state, favoriteIds: state.favoriteIds.concat(action.payload) }
    case 'favoriteIds/deleteFavoriteId':
      return { ...state, 
        favoriteIds: [
          ...state.favoriteIds.slice(0, action.payload),
          ...state.favoriteIds.slice(action.payload + 1)
        ]
      }
    case 'favorites/setFilteredFavorites':
      return { ...state, filteredFavorites: action.payload }
    case 'searchKey/setSearchKey':
      return { ...state, searchKey: action.payload }
    default:
      return state
  }
}

const store = createStore(reducer);

export default store;

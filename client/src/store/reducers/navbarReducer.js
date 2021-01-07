const initialState = {
  searchKey: ''
}

function navbarReducer( state = initialState, action ) {
  switch(action.type) {
    case 'navbar/setSearchKey':
      return { ...state, searchKey: action.searchKey }
    default:
      return state
  }
}

export default navbarReducer;

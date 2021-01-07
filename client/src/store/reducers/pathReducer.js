const initialState = {
  path: ''
}

function pathReducer( state = initialState, action ) {
  switch(action.type) {
    case 'path/setPath':
      return { ...state, path: action.path }
    default:
      return state
  }
}

export default pathReducer;

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { homeReducer, favoriteReducer, pathReducer, navbarReducer, movieDetailReducer } from './reducers';

const rootReducer = combineReducers({
  homeReducer,
  favoriteReducer,
  pathReducer,
  navbarReducer,
  movieDetailReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

npm install react-router-dom
pages --- index.js
css --- .active

in index.js src
import { BrowserRouter } from 'react-router-dom';

<BrowserRouter>
  <App />
</BrowserRouter>

in App.js
import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom'
import { Home, Favorite } from './pages'
  <>
    <nav>
      <ul>
        <li>
          <NavLink exact to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/favorites">Favourites</NavLink>
        </li>
      </ul>
    </nav>
  
    <Switch>
      <Route path="/favorites">
        <Favorite></Favorite>
      </Route>
      <Route path="/">
        <Home></Home>
      </Route>
      <Route path="/details/:MovieId">
        <MovieDetail></MovieDetail>
      </Route>
    </Switch>
</>

in index.js pages

export { default as Home } from './Home'

in Component.js
import { useHistory, Switch, Route, useRouterMatch } from 'react-router-dom';

const history = useHistory()
const { path, url } = useRouterMatch

function goDetails(MovieId) {
  history.push(`/${url}/${MovieId}`)
}

onClick={() => goDetails(movie.id)}

    <Switch>
      <Route path="/movie/add-movie">
        <AddMovie></AddMovie>
      </Route>
      <Route path="/movie/:MovieId">
        <MovieDetail></MovieDetail>
      </Route>
    </Switch>

    <Switch>
    <Route path={`/${path}/add-movie`}>
      <AddMovie></AddMovie>
    </Route>
    <Route path={`/${path}/add-movie`}>
      <MovieDetail></MovieDetail>
    </Route>
    </Switch>

in Details.js
import useParams from 'react-router-dom';
const { MovieId } = useParams();

fetch(`${MovieId}`)

in AddFood.js
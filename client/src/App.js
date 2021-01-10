import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, MovieDetail, Favorite } from './pages';
import NavBar from './components/NavBar'

function App() {
  return (
    <>
      <div className="main-page">
        <NavBar />
        <Switch>
          <Route path="/favorites">
            <Favorite></Favorite>
          </Route>
          <Route path="/details/:MovieId">
            <MovieDetail></MovieDetail>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;

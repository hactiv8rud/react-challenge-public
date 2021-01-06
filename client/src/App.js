import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, MovieDetail, Favorite } from './pages';
import NavBar from './components/NavBar'

function App() {
  const [searchKey, setSearchKey] = useState('');
  return (
    <>
      <div className="main-page">
        <NavBar setSearchKey={setSearchKey} />
        <Switch>
          <Route path="/favorites">
            <Favorite></Favorite>
          </Route>
          <Route path="/details/:MovieId">
            <MovieDetail></MovieDetail>
          </Route>
          <Route path="/">
            <Home searchKey={searchKey}></Home>
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;

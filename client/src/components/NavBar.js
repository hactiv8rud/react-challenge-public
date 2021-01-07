import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchKey } from '../store/actions/navbarAction';
import { NavLink } from 'react-router-dom';
import useDebounce from '../hooks/useDebounce';

function NavBar() {
  const [searchKeyNavBar, setSearchKeyNavBar] = useState('');
  const searchKey = useSelector(state => state.navbarReducer.searchKey);
  const path = useSelector(state => state.pathReducer.path);
  const dispatch = useDispatch();
  const debouncedValue = useDebounce(searchKeyNavBar, 500);

  function handleInputChange(event) {
    setSearchKeyNavBar(event.target.value);
  }

  useEffect(() => {
    dispatch(setSearchKey(debouncedValue));
  }, [debouncedValue]);

  return(
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="nav-link d-flex align-items-center" exact to="/">
          <img src="/images/logo.svg" width="30" height="30" className="d-inline-block align-top" alt="movie-app logo" loading="lazy" />
          <div className="brand-name">MOVIE APP</div>
        </NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link d-flex align-items-center" activeClassName="active" exact to="/">
                <img src="/images/home.svg" width="30" height="30" className="d-inline-block align-top" alt="movie-app logo" loading="lazy" />
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link d-flex align-items-center" activeClassName="active" exact to="/favorites">
                <img src="/images/star.svg" width="30" height="30" className="d-inline-block align-top" alt="movie-app logo" loading="lazy" />
                Favorites
              </NavLink>
            </li>
          </ul>
          { (path === "/favorites" || path === "/") && (
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" name="searchKey" value={searchKeyNavBar} onChange={handleInputChange} type="search" placeholder="Search by Title" />
            </form>
            )}
        </div>
      </nav>
    </>
  );
}

export default NavBar;

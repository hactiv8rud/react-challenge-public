import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { setPath } from '../store/actions/pathAction';
import MovieCard from '../components/MovieCard';
import NoItem from '../components/NoItem';

function Favorite() {
  const { path } = useRouteMatch();
  const favorites = useSelector(state => state.favoriteReducer.favorites);
  const [filteredFavorites, setFilteredFavorites] = useState([]);
  const searchKey = useSelector(state => state.navbarReducer.searchKey);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPath(path));
  },[dispatch, path])

  useEffect(() => {
    if (searchKey !== '') {
     const filtered = favorites.filter(favorite => favorite.original_title.toLowerCase().includes(searchKey.toLowerCase()));
     setFilteredFavorites(filtered);
    } else {
      setFilteredFavorites(favorites);
    }
  }, [favorites, searchKey])

  return (
    <>
      <h1 className="text-center mt-2">Favorite Page</h1>
      {(!favorites.length) && (<NoItem text={"No favorites"} />)}
      {(favorites.length !== 0 && !filteredFavorites.length) && <NoItem text={"No results"} />}
      {filteredFavorites.length !== 0 && (
          <div className="layout-center row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4  g-4 ml-2 mr-2">
            {
              filteredFavorites.map((movie) => {
                return <MovieCard movie={movie} key={movie.id} />
              })
            }
          </div>
        )
      }
    </>
  );
}

export default Favorite;

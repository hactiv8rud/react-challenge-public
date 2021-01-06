import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilteredFavorites } from '../store/actions';

import MovieCard from '../components/MovieCard';
import Spinner from '../components/Spinner';
import NoItem from '../components/NoItem';
import Error from '../components/Error';

function Favorite() {

  const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=90d4a0880579cc5fa24ef5de07760fd3&page=1`;
  const filteredFavorites = useSelector(state => state.filteredFavorites);
  const searchKey = useSelector(state => state.searchKey);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const favoriteIds = useSelector(state => state.favoriteIds);
  const dispatch = useDispatch();

  function handleResponse (response) {
    let contentType = response.headers.get('content-type')
    if (contentType.includes('application/json')) {
      return handleJSONResponse(response)
    } else if (contentType.includes('text/html')) {
      return handleTextResponse(response)
    } else {
      throw new Error(`Sorry, content-type ${contentType} not supported`)
    }
  }
  
  function handleJSONResponse (response) {
    return response.json()
      .then(json => {
        if (response.ok) {
          return json
        } else {
          return Promise.reject(Object.assign({}, json, {
            status: response.status,
            statusText: response.statusText
          }))
        }
      })
  }

  function handleTextResponse (response) {
    return response.text()
      .then(text => {
        if (response.ok) {
          return text
        } else {
          return Promise.reject({
            status: response.status,
            statusText: response.statusText,
            err: text
          })
        }
      })
  }

  useEffect(() => {
    fetch(url)
      .then(handleResponse)
      .then((data) => {
        if (searchKey !== '') {
          const filtered = data.results.filter((movie) => {
            return (favoriteIds.includes(movie.id) && movie.title.toLowerCase().includes(searchKey.toLowerCase()))
          });
          dispatch(setFilteredFavorites(filtered));
        } else {
          const filtered = data.results.filter((movie) => {
            return (favoriteIds.includes(movie.id))
          })
          dispatch(setFilteredFavorites(filtered))
        }
      })
      .catch((error) => {
        setError(error);
      })
      .finally(_ => setIsLoaded(true))

  }, [favoriteIds, searchKey])


  if (!isLoaded) {
    return <Spinner />
  }
  
  return (
    <>
      <h1 className="text-center mt-2">Favorite Page</h1>
      {(error) && (<Error error={error} />)}
      {(!favoriteIds.length) && (<NoItem text={"No favorites"} />)}
      {(favoriteIds.length && !filteredFavorites.length && !error) && <NoItem text={"No results"} />}
      {filteredFavorites && (
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

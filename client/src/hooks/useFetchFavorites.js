import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFavorites } from '../store/actions';

function useFetchFavorites(url, arrDependencies) {
  const [data, setData] = useState([]);
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
        const favorites = data.results.filter((movie) => {
          return (favoriteIds.includes(movie.id))
        });
        setData(favorites);
        dispatch(setFavorites(favorites));
      })
      .catch((error) => {
        setError(error);
      })
      .finally(_ => setIsLoaded(true))
  }, arrDependencies)

  return { data, setData, isLoaded, error }
}

export default useFetchFavorites;

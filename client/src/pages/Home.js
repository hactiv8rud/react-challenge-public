import React, { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import { useSelector, useDispatch } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { setPath } from '../store/actions';
import MovieCard from '../components/MovieCard';
import Spinner from '../components/Spinner';
import NoItem from '../components/NoItem';
import Error from '../components/Error';
import useDebounce from '../hooks/useDebounce';

function Home() {
  const { path } = useRouteMatch();
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const searchKey = useSelector(state => state.searchKey);
  let url = '';
  if (searchKey === '') {
    url = `https://api.themoviedb.org/3/trending/movie/day?api_key=90d4a0880579cc5fa24ef5de07760fd3&page=${currentPage}`;
  } else {
      url = `https://api.themoviedb.org/3/search/movie?api_key=90d4a0880579cc5fa24ef5de07760fd3&language=en-US&query=${searchKey.toLowerCase()}&page=${currentPage}&include_adult=false`;
  }
  const { data: movies, setData, isLoaded, error, totalPages, totalResults } = useFetch(url, [searchKey, currentPage]);

  useEffect(() => {
    dispatch(setPath(path));
  },[])

  if (!isLoaded) {
    return <Spinner />
  }
  
  return (
    <>
      {(error) && (<Error error={error} />)}
      {
        (!movies.length && !error) ? (
          <NoItem text={"No results"}/>
        ) : (
          <div className="layout-center row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4  g-4 ml-2 mr-2">
            {
              movies.map((movie) => {
                return <MovieCard movie={movie} key={movie.id} />
              })
            }
          </div>
        )
      }
    </>
  );

}

export default Home;

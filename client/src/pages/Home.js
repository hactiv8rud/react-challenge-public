import React, { useState } from 'react';
import useFetch from '../hooks/useFetch';
import MovieCard from '../components/MovieCard';
import Spinner from '../components/Spinner';
import NoResult from '../components/NoResult';
import Error from '../components/Error';

function Home(props) {
  const [currentPage, setCurrentPage] = useState(1);
  let url = '';
  if (props.searchKey === '') {
    url = `https://api.themoviedb.org/3/trending/movie/day?api_key=90d4a0880579cc5fa24ef5de07760fd3&page=${currentPage}`;
  } else {
      url = `https://api.themoviedb.org/3/search/movie?api_key=90d4a0880579cc5fa24ef5de07760fd3&language=en-US&query=${props.searchKey.toLowerCase()}&page=${currentPage}&include_adult=false`;
  }
  const { data: movies, setData, isLoaded, error, totalPages, totalResults } = useFetch(url, [props.searchKey, currentPage]);

  if (isLoaded) {
    return <Spinner />
  }
  
  return (
    <>
      {(error) && (<Error error={error} />)}
      {
        (!movies.length && !error) ? (
          <NoResult />
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
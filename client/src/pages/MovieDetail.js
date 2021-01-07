import React, { useState, useEffect } from 'react';
import { useParams, useRouteMatch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setPath } from '../store/actions';
import useFetch from  '../hooks/useFetch';
import MovieImage from '../components/MovieImage';
import MovieDetailList from '../components/MovieDetailList';
import MovieOverview from '../components/MovieOverview';

function MovieDetail() {
  const { path } = useRouteMatch();
  const dispatch = useDispatch();
  const { MovieId } = useParams();
  const url = `https://api.themoviedb.org/3/movie/${MovieId}?api_key=90d4a0880579cc5fa24ef5de07760fd3&language=en-US`;
  const { data: movie, isLoaded, error } = useFetch(url, []);

  useEffect(() => {
    dispatch(setPath(path));
  },[])

  return (
    <>
      <div className="row justify-center d-flex align-items-center">
        <div className="col-sm col-md col-lg-4">
          <MovieImage movie={movie} />
        </div>
        <div className="col-sm col-md col-lg-3">
          <MovieDetailList movie={movie} />
        </div>
        <div className="col-sm col-md-12 col-lg-7 mt-2">
          <MovieOverview movie={movie} />
        </div>
        
      </div>  
    </>
  );
}

export default MovieDetail;


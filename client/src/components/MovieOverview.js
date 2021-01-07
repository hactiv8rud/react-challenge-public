import React from 'react';
import Spinner from '../components/Spinner';

function MovieOverview(props) {

  if(Object.keys(props.movie).length && props.movie.constructor === Object) {
    return (
    <>
      <div className="card border-dark bg-dark">
        <div className="card-body text-light">
          {props.movie.overview}
        </div>
      </div>
    </>
    );
  } else {
    return <Spinner />
  }
}

export default MovieOverview;

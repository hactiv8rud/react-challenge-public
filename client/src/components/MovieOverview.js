import React from 'react';

function MovieOverview(props) {

  return (
  <>
    <div className="card border-dark bg-dark">
      <div className="card-body text-light">
        {props.movie.overview}
      </div>
    </div>
  </>
  );
}

export default MovieOverview;

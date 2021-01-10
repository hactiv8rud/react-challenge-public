import React from 'react';


function MovieImage(props) {
  const imageUrl = `http://image.tmdb.org/t/p/w342${props.movie.poster_path}`

  return (
    <>
      <div className="card mt-4 border-dark">
        <div className="card-body">
        {
          (props.movie.poster_path) ? (
            <img src={imageUrl} className="card-img-top detail-movie-image" alt={props.movie.title} />
          ) : (
            <img src="/images/no-image.svg" className="card-img-top" alt={props.movie.title} />
          )
        }
        </div>
      </div>
    </>
  );
}

export default MovieImage;

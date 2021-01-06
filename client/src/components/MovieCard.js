import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function MovieCard(props) {
  const [image_url] = useState(`http://image.tmdb.org/t/p/w342${props.movie.poster_path}`);
  const [MovieId] = useState(props.movie.id);

  return (
    <>
      <Link className="home-movie-detail-link" to={`/details/${MovieId}`}>
        <div className="col mt-2">
          <div className="card">
            {
              (props.movie.poster_path) ? (
                <img src={image_url} className="card-img-top" alt={props.movie.original_title} />
              ) : (
                <img src="/images/no-image.svg" className="card-img-top" alt={props.movie.original_title} />
              )
            }
            <div className="card-body d-flex flex-column text-center">
              <h5 className="card-title mb-0 home-movie-title">{props.movie.original_title}</h5>
              {/* <a href="" onClick={goDetails} className="btn btn-success">See Details</a> */}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default MovieCard;

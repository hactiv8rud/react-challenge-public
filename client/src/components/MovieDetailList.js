import React from 'react';
import formatDate from '../helpers/formatDate';
import formatUSD from '../helpers/formatUSD';
import Spinner from '../components/Spinner';

function MovieDetailList(props) {

  console.log(props)
  if(Object.keys(props.movie).length && props.movie.constructor === Object) {
    return (
      <>
        <div className="card border-dark">
          <div className="card-header bg-dark text-light">
            {props.movie.title}
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{formatDate(props.movie.release_date)}</li>
            <li className="list-group-item">{props.movie.genres.map(genre => genre.name).join(', ')}</li>
            <li className="list-group-item">{props.movie.runtime} minutes</li>
            <li className="list-group-item">{props.movie.production_countries.map(country => country.iso_3166_1).join(', ')}</li>
            <li className="list-group-item">{props.movie.spoken_languages.map(language => language.english_name).join(', ')}</li>
            {props.movie.vote_count <= 1 && <li className="list-group-item">{props.movie.vote_average} from {props.movie.vote_count} vote</li>}
            {props.movie.vote_count > 1 && <li className="list-group-item">{props.movie.vote_average} from {props.movie.vote_count} votes</li>}
            <li className="list-group-item">{props.movie.budget ? formatUSD(props.movie.budget) : "-"} (budget)</li>
            <li className="list-group-item">{props.movie.revenue ? formatUSD(props.movie.revenue) : "-"} (revenue)</li>
          </ul>
        </div>
      </>
    );
  } else {
      return <Spinner />
  }
}

export default MovieDetailList;

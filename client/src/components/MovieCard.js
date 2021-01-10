import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, deleteFavorite } from '../store/actions/favoriteAction';

function MovieCard(props) {
  const [imageUrl] = useState(`http://image.tmdb.org/t/p/w342${props.movie.poster_path}`);
  const [MovieId] = useState(props.movie.id);
  const favorites = useSelector(state => state.favoriteReducer.favorites);
  const dispatch = useDispatch()

  function deleteFavoriteMovie() {
    dispatch(deleteFavorite(props.movie.id));
  }

  function addFavoriteMovie() {
    const newFavorite = {
      id: props.movie.id,
      original_title: props.movie.original_title,
      poster_path: props.movie.poster_path
    }
    dispatch(addFavorite(newFavorite));
  } 

  useEffect(() => {
    console.log(favorites);
  },[favorites])


  return (
    <>
        <div className="col mt-2">
          <div className="card">
            <Link className="home-movie-detail-link" to={`/details/${MovieId}`}>  
              {
                (props.movie.poster_path) ? (
                  <img src={imageUrl} className="card-img-top" alt={props.movie.original_title} />
                ) : (
                  <img src="/images/no-image.svg" className="card-img-top" alt={props.movie.original_title} />
                )
              }
             </Link>
            {
              (favorites.some(element => element.id === props.movie.id)) ? (
                <img onClick={deleteFavoriteMovie} src="/images/star.svg" className="wishlist-icon" alt="red-color-star" />
              ) : (
                <img onClick={addFavoriteMovie} src="/images/empty-star.svg" className="wishlist-icon" alt="empty-star" />
              )
            }
            <div className="card-body d-flex flex-column text-center home-movie-title-container">
              <h5 className="card-title mb-0 home-movie-title">{props.movie.original_title}</h5>
              {/* <a href="" onClick={goDetails} className="btn btn-success">See Details</a> */}
            </div>
          </div>
        </div>
    </>
  );

}

export default MovieCard;

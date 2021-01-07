import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addFavoriteId, deleteFavoriteId } from '../store/actions/favoriteAction';
import Swal from 'sweetalert2';

function MovieCard(props) {
  const [image_url] = useState(`http://image.tmdb.org/t/p/w342${props.movie.poster_path}`);
  const [MovieId] = useState(props.movie.id);
  const favoriteIds = useSelector(state => state.favoriteReducer.favoriteIds);
  const dispatch = useDispatch()

  function deleteFavorite() {
    const targetIndex = favoriteIds.indexOf(props.movie.id);
    dispatch(deleteFavoriteId(targetIndex));
    Swal.fire({
      toast: true,
      icon: 'success',
      title: 'Removed from your favorites',
      animation: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: false,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
  }

  function addFavorite() {
    if (!favoriteIds.includes(props.movie.id)) {
      dispatch(addFavoriteId(props.movie.id));
      Swal.fire({
        toast: true,
        icon: 'success',
        title: 'Added to your favorites',
        animation: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: false,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
    }
  }

  return (
    <>
        <div className="col mt-2">
          <div className="card">
            <Link className="home-movie-detail-link" to={`/details/${MovieId}`}>  
              {
                (props.movie.poster_path) ? (
                  <img src={image_url} className="card-img-top" alt={props.movie.original_title} />
                ) : (
                  <img src="/images/no-image.svg" className="card-img-top" alt={props.movie.original_title} />
                )
              }
             </Link>
            {
              (favoriteIds.includes(props.movie.id)) ? (
                <img onClick={deleteFavorite} src="/images/star.svg" className="wishlist-icon" />
              ) : (
                <img onClick={addFavorite} src="/images/empty-star.svg" className="wishlist-icon" />
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

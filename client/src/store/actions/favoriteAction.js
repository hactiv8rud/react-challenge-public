import Swal from 'sweetalert2';

export const addFavorite = (favorite) => {
  return (dispatch, getState) => {
    const { favorites } = getState().favoriteReducer
    if (!favorites.some(element => element.id === favorite.id)) {
      dispatch({
        type: "favorites/addFavorite",
        favorite
      })
      Swal.fire({
        toast: true,
        icon: 'success',
        title: 'Added to favorites',
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
    } else {
      Swal.fire({
        toast: true,
        icon: 'error',
        title: 'The movie has already been in favorites',
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
}

export const deleteFavorite = (FavoriteId) => {
  return (dispatch, getState) => {
    const { favorites } = getState().favoriteReducer
    console.log(favorites)
    const favoriteIndex = favorites.findIndex((e) => e.id === FavoriteId);
    if (favoriteIndex >= 0) {
      dispatch({
        type: "favorites/deleteFavorite",
        favoriteIndex
      })
      Swal.fire({
        toast: true,
        icon: 'success',
        title: 'Removed from favorites',
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
    } else {
      Swal.fire({
        toast: true,
        icon: 'error',
        title: 'The movie is not in favorites',
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
}

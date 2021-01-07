export function addFavoriteId(payload) {
  return {
    type: "favoriteIds/addFavoriteId",
    payload
  }
}

export function deleteFavoriteId(payload) {
  return {
    type: "favoriteIds/deleteFavoriteId",
    payload
  }
}

export function setSearchKey(payload) {
  return {
    type: "searchKey/setSearchKey",
    payload
  }
}

export function setFilteredFavorites(payload) {
  return {
    type: "favorites/setFilteredFavorites",
    payload
  }
}

export function setPath(payload) {
  return {
    type: "path/setPath",
    payload
  }
}

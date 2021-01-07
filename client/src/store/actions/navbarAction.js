export const setSearchKey = (searchKey) => {
  return (dispatch) => {
   dispatch({
    type: "navbar/setSearchKey",
    searchKey
   })
  }
}  

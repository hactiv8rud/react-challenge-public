export const setPath = (path) => {
  return (dispatch) => {
   dispatch({
    type: "path/setPath",
    path
   })
  }
}  

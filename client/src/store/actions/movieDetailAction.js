export const fetchMovieDetail = (url) => {
  return (dispatch) => {
    fetch(url)
      .then(handleResponse)
      .then((data) => {
        dispatch({
          type: "movieDetail/setMovieDetail",
          movieDetail: data
        })
      })
      .catch((error) => {
        dispatch({
          type: "movieDetail/setMovieDetailError",
          movieDetailError: error
        })
      })
      .finally(_ => {
        dispatch({
          type: "movieDetail/setMovieDetailIsLoaded",
          movieDetailIsLoaded: true
        })
      })
  }

  function handleResponse (response) {
    let contentType = response.headers.get('content-type')
    if (contentType.includes('application/json')) {
      return handleJSONResponse(response)
    } else if (contentType.includes('text/html')) {
      return handleTextResponse(response)
    } else {
      throw new Error(`Sorry, content-type ${contentType} not supported`)
    }
  }
  
  function handleJSONResponse (response) {
    return response.json()
      .then(json => {
        if (response.ok) {
          return json
        } else {
          return Promise.reject(Object.assign({}, json, {
            status: response.status,
            statusText: response.statusText
          }))
        }
      })
  }

  function handleTextResponse (response) {
    return response.text()
      .then(text => {
        if (response.ok) {
          return text
        } else {
          return Promise.reject({
            status: response.status,
            statusText: response.statusText,
            err: text
          })
        }
      })
  }
}

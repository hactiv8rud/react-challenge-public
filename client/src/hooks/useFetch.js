import { useState, useEffect } from 'react';

function useFetch(url, arrDependencies) {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(null);
  const [totalResults, setTotalResults] = useState(null);

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

  useEffect(() => {
    fetch(url)
      .then(handleResponse)
      .then((data) => {
        if (data.results) {
          setData(data.results);
        } else {
          setData(data)
        }
        if(data.total_pages) {
          setTotalPages(data.total_pages);
        }
        if(data.total_results) {
          setTotalResults(data.total_results);
        }
      })
      .catch((error) => {
        setError(error);
      })
      .finally(_ => setIsLoaded(false))
  }, arrDependencies)
  
  // useEffect(() => {
  //   fetch(url)
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         setData(result.results);
  //         setIsLoaded(true);
  //         setTotalPages(result.total_pages);
  //         setTotalResults(result.total_results);
  //       },
  //       (error) => {
  //         setIsLoaded(true);
  //         setError(error);
  //       }
  //     )
  // }, arrDependencies)
  return { data, setData, isLoaded, error, totalPages, totalResults }
}

export default useFetch;

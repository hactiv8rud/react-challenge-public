import React from 'react';
import NavBar from '../components/NavBar';
import MovieCard from '../components/MovieCard';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKey: '',
      page: 1,
      total_pages: 0,
      total_results: 0,
      movies: [],
      isLoaded: false,
      error: null
    };
    this.setSearchKey = this.setSearchKey.bind(this);
  }


  setSearchKey(query) {
    this.setState({ searchKey: query });
  }

  componentDidMount() {
    this.setState({searchKey: ''})
    const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=90d4a0880579cc5fa24ef5de07760fd3&page=${this.state.page}`;
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            movies: result.results,
            total_pages: result.total_pages,
            total_results: result.total_results,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.searchKey !== prevState.searchKey) {
      let url = '';
      if (this.state.searchKey === '') {
        url = `https://api.themoviedb.org/3/trending/movie/day?api_key=90d4a0880579cc5fa24ef5de07760fd3&page=${this.state.page}`;
      } else {
          url = `https://api.themoviedb.org/3/search/movie?api_key=90d4a0880579cc5fa24ef5de07760fd3&language=en-US&query=${this.state.searchKey.toLowerCase()}&page=${this.state.page}&include_adult=false`;
      }
    
      fetch(url)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              movies: result.results,
              total_pages: result.total_pages,
              total_results: result.total_results
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  }

  render() {
    return (
      <>
        <div className="main-page">
          <NavBar setSearchKey={this.setSearchKey} />
          <div className="layout-center row row-cols-1 row-cols-md-4 g-4 ml-2 mr-2">
          {
            this.state.movies.map((movie) => {
              return <MovieCard movie={movie} key={movie.id} />
            })
          }
          </div>
        </div>
        
      </>
    );
  }
}

export default Home;

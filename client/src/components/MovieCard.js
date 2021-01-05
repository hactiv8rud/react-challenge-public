import React from 'react';

class MovieCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image_url: `http://image.tmdb.org/t/p/w342${this.props.movie.poster_path}`
    };
    this.goDetails = this.goDetails.bind(this);
  }

  goDetails() {

  }
  render() {
    return (
      <>
        <div className="col mt-2">
          <div className="card">
            {
              (this.props.movie.poster_path) ? (
                <img src={this.state.image_url} className="card-img-top" alt={this.props.movie.original_title} />
              ) : (
                <img src="/images/no-image.svg" className="card-img-top" alt={this.props.movie.original_title} />
              )
            }
            <div className="card-body d-flex flex-column text-center">
              <h5 className="card-title">{this.props.movie.original_title}</h5>
              <a href="" onClick={this.goDetails} className="btn btn-success">See Details</a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MovieCard;

import React from 'react';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKey: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.goHome = this.goHome.bind(this);
  }

  handleInputChange(event) {
    console.log('navbar')
    this.setState({ searchKey: event.target.value });
    this.props.setSearchKey(event.target.value);
  }

  goHome(event) {
    event.preventDefault();
  }

  // componentDidUpdate(prevState) {
  //   if (this.state.searchKey !== prevState.searchKey) {
  //     this.props.setSearchKey(this.state.searchKey);
  //     console.log(this.state.searchKey);
  //   }
  // }

  render() {
    return(
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" onClick={this.goHome} href="">
            <img src="/images/logo.svg" width="30" height="30" className="d-inline-block align-top" alt="movie-app logo"
                    loading="lazy" />
                Movie App</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" onClick={this.goHome} href="">Home <span className="sr-only">(current)</span></a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" name="searchKey" value={this.state.searchKey} onChange={this.handleInputChange} type="search" placeholder="Search by Title" />
            </form>
          </div>
        </nav>
      </>
    );
  }
}

export default NavBar;

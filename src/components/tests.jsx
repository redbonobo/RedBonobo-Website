import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

<img src={Logo} id="logo" className="logo" to="/" alt="logo" />;

class Movies extends Component {
  state = {
    movies: getMovies()
  };

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies: movies });
  };

  render() {
    if (this.state.movies.length === 0) return <p>There are no movies.</p>;

    return (
      <React.Fragment>
        <p>You have {this.state.movies.length} movies.</p>
        <table className="table">
          <thead>
            <tr>
              <th className="btn btn-warning">Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movies;

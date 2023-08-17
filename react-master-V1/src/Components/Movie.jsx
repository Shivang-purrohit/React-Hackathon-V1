import React, { useEffect, useState } from "react";
import { searchMovies } from "../API/Api";
import axios from "axios";
import Cara from "./Cara";

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    const results = await searchMovies(searchQuery);
    setMovies(results);
  };

  const handleAddToFavorite = async (movie) => {
    try {
      const response = await axios.post("http://localhost:3030/fav", movie);
      alert("Movie added to favorites:", response.data);
    } catch (error) {
      console.error("Error adding movie to favorites:", error);
    }
  };

  const handleRemoveFromFavorites = async (id) => {
    try {
      await axios.delete(`http://localhost:3030/fav/${id}`);
    } catch (error) {
      console.error("Error removing movie from favorites:", error);
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <section>
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger fixed-top">
          <div className="container">
            <a className="navbar-brand" href="/">
              <b>NETFIXX</b>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link" href="/aboutus">
                    About Us
                  </a>
                </li> */}
                <li className="nav-item">
                  <a className="nav-link" href="/favorite">
                    Favorite
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav ">
                <li className="nav-item active">
                  <a className="nav-link" href="/login">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>

      <section className="flex-grow-1 mt-5">
        <div className="container">
          <Cara/>
          <div className="row justify-content-center">
            <div className="col-md-6 col-sm-12 col-lg-3 m-5 text-start rounded">
              <h2>NETFIXX</h2>
              <form onSubmit={handleSearch}>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleInputChange}
                  id="movieSearch"
                  placeholder="Search your movie"
                />
                &ensp;
                <button className="btn btn-danger m-1" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6 col-sm-12 col-lg-10 text-start rounded">
              <div className="row mt-4">
                {movies.length > 0 ? (
                  movies.map((movie) => (
                    <div key={movie.imdbID} className="col-md-4 mb-4">
                      <div className="card">
                        <img
                          src={movie.Poster}
                          className="card-img-top"
                          height={350}
                          alt={movie.Title}
                        />
                        <div className="card-body">
                          <div className="row">
                            <div className="col-6">
                              <button
                                className="btn btn-danger"
                                onClick={() => handleAddToFavorite(movie)}
                                
                              >
                                <i
                                  className="fa-solid fa-heart "
                                  style={{ color: "Yellow" }}
                                ></i>
                              </button>
                            </div>
                            <div className="col-6 d-flex justify-content-end">
                              <button
                                className="btn btn-danger"
                                onClick={() =>
                                  handleRemoveFromFavorites(movie.id)
                                }
                              >
                              Watch Now
                              </button>
                            </div>
                          </div>
                          <h5 className="card-title m-1">{movie.Title}</h5>
                          <p className="card-text">{movie.Year}</p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-center">...</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <footer className="bg-danger text-light text-center text-lg-start">
          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2023 Copyright :
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Movies;

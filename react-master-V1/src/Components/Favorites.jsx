import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@mui/material";

const Favorites = () => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    fetchFavoriteMovies();
  }, []);

  const fetchFavoriteMovies = async () => {
    try {
      const response = await axios.get("http://localhost:3030/fav");
      setFavoriteMovies(response.data);
    } catch (error) {
      console.error("Error fetching favorite movies:", error);
    }
  };

  const handleRemoveFromFavorites = async (id) => {
    try {
      await axios.delete(`http://localhost:3030/fav/${id}`);
      fetchFavoriteMovies();
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
                <li className="nav-item">
                  <a className="nav-link" href="/favorite">
                    Favorite
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav ">
                <li className="nav-item active">
                  <a className="nav-link" href="/login">
                    Logout <span className="sr-only">(current)</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>

      <section className="flex-grow-1 mt-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-sm-12 col-lg-10 text-start rounded">
              <div className="mt-5">
                <h2>Favorite Movies</h2>
                <div className="row mt-4">
                  {favoriteMovies.length > 0 ? (
                    favoriteMovies.map((movie) => (
                      <div key={movie.id} className="col-md-4 mb-4">
                        <div className="card">
                          <img
                            src={movie.Poster}
                            className="card-img-top"
                            height={350}
                            alt={movie.Title}
                          />
                          <div className="card-body">
                            <h5 className="card-title">{movie.Title}</h5>
                            <p className="card-text">{movie.Year}</p>
                            <div className="row">
                            <div className="col-6">
                              <button
                                className="btn btn-danger"
                                onClick={() =>
                                  handleRemoveFromFavorites(movie.id)
                                }
                                
                              >
                                <i
                                  className="fa-solid fa-remove "
                                  style={{ color: "white" }}
                                ></i>
                              </button>
                            </div>
                            <div className="col-6 d-flex justify-content-end">
                             
                              <button
                                className="btn btn-danger "
                               
                              >
                                <a style={{textDecoration: 'none', color:'white'}} href="https://www.google.com/search?rlz=1C1CHZN_enIN1056IN1056&hl=en&q=the+avengers+film+series+movies&si=ACFMAn_IOTfdXX6zhv75oyqwXmIGr0c4yZ4eS-5TIqNnBxJAKlJXKikjsjE9idoEN7MmkNoVzh0ZxFrceYhbRw43AuKncECgoms_TK-rO5VPBmfH8T2kGtpzsS-QwKo2p3uz41eaEBo_LfsP0SzP9aVvWbBvWoZkhg%3D%3D&tbm=vid&sa=X&ved=2ahUKEwir7YjnjZqAAxWt1zgGHZ5PBykQ0pQJegQIERAB&cshid=1689747179719655&biw=1600&bih=757&dpr=1">
                              Watch Now
                              </a>
                              </button>
                             
                            </div>
                          </div>
                              
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-center">No favorite movies found.</p>
                  )}
                </div>
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
          ></div>
        </footer>
      </section>
    </div>
  );
};

export default Favorites;

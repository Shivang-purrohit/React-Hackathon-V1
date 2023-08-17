import React from "react";
import Cara from "./Cara";

const Home = () => {
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
                  <a className="nav-link" href="/favorite">
                    Favorites
                  </a>
                </li> */}
              </ul>
              <ul className="navbar-nav ">
                <li className="nav-item active">
                  <a className="nav-link" href="/register">
                    SignUp <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/login">
                    SignIN
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
         
            <div className="col-md-5 mt-5">
              
           
           
              <div className="card bg-">
                <div className="card-body text-center">
                  <h1 className="card-title">Welcome</h1>
                  <p className="card-text">Please Login first</p>
                  <a href="/login" className="btn btn-danger">
                    Login
                  </a>
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
          >
            © 2023 Copyright :
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Home;

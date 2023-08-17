import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, email, password, confirmPassword } = formData;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Password and Confirm Password do not match");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3030/reg", formData);
      console.log("User registered successfully:", response.data);
      window.location.href = "/login";
    } catch (error) {
      console.error("Registration failed:", error);
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
                  <a className="nav-link" href="/favorite">
                    Favorite
                  </a>
                </li> */}
              </ul>
              <ul className="navbar-nav active">
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
          <div className="row justify-content-center">
            <div className="col-md-6 col-sm-12 col-lg-5 m-5 text-start rounded">
              <div className="card p-2">
                <div className="card-body    mt-3">
                  <h2
                    className="text-center m-2 "
                    style={{ fontSize: "35px" }}
                  >
                    SignUp
                  </h2>

                  <form onSubmit={handleSubmit}>
                    <input
                      required
                      type="text"
                      placeholder="name"
                      className="form-control mb-2"
                      name="name"
                      value={name}
                      onChange={handleInputChange}
                    />
                    <input
                      required
                      type="text"
                      placeholder="email"
                      className="form-control mb-2"
                      name="email"
                      value={email}
                      onChange={handleInputChange}
                    />
                    <input
                      required
                      type="password"
                      placeholder="password"
                      className="form-control mb-2"
                      name="password"
                      value={password}
                      onChange={handleInputChange}
                    />
                    <input
                      required
                      type="password"
                      placeholder="confirm password"
                      className="form-control mb-2"
                      name="confirmPassword"
                      value={confirmPassword}
                      onChange={handleInputChange}
                    />

                    <button className="btn btn-danger mt-3" type="submit">
                      SignUp
                    </button>
                  </form>
                </div>
                <div className="w-100 text-center mt-2">
                  Already have an account? <a href="/login">Log In</a>
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
            © 2023 Copyright : &nbsp;
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Register;

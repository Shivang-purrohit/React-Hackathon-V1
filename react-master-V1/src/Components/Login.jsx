import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get("http://localhost:3030/reg");
      const users = response.data;

      const user = users.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        console.log("User authenticated:", user);

        const newUser = {
          email: email,
          password: password,
        };

        try {
          await axios.post("http://localhost:3030/reg", newUser);
          console.log("User data saved:", newUser);
          window.location.href = "/movie";
        } catch (error) {
          console.error("Error saving user data:", error);
        }
      } else {
        console.log("Invalid credentials");
      }
    } catch (error) {
      console.error("Error retrieving user data:", error);
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
              <ul className="navbar-nav ">
                <li className="nav-item active">
                  <a className="nav-link " href="/register">
                    SignUp <span className="sr-only">(current)</span>
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
                <div className="card-body  mt-3">
                  <h2
                    className="text-center  m-2"
                    style={{ fontSize: "35px", }}
                  >
                    SignIn
                  </h2>

                  <form onSubmit={handleSubmit}>
                    <input
                      required
                      type="email"
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
                    <button className="btn btn-danger mt-3" type="submit">
                      Sign In
                    </button>
                  </form>
                </div>
                <div className="w-100 text-center mt-2">
                  Don't have an account? <a href="/register">Sign Up</a>
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

export default Login;

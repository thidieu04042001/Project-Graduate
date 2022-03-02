import React, { Component } from "react";

import "./login.css";
// import db from "../firebase.js";

class Login extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="wrapper">
              <div className="logo">
                <img src="../images/logo_login.png" alt="" />
              </div>
              <div className="text-center mt-4 name"> DOCTOR HOME </div>
              <form className="p-3 mt-3">
                <div className="form-field d-flex align-items-center">
                  <span className="fas fa-envelope" />
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div className="form-field d-flex align-items-center">
                  <span className="fas fa-key" />
                  <input
                    type="password"
                    name="password"
                    id="pwd"
                    placeholder="Password"
                  />
                </div>
                <button className="btn mt-3">Login</button>
              </form>
              <div className="text-center fs-6">
                {" "}
                <a href="/login/forgotpassword">Forget password?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;

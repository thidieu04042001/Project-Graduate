import React, { Component } from "react";

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
  }

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
                <div className="title-fPass">
                  <lable>Enter your email to find password!</lable>
                </div>
                <div className="form-field d-flex align-items-center">
                  <span className="fas fa-envelope" />
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <button className="btn mt-3">Reset Password</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ForgotPassword;

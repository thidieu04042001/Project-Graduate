import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../firebase";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
  }, [user, loading]);
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
                <input type="password" name="password" placeholder="Password" />
              </div>
              <div className="form-field d-flex align-items-center">
                <span className="fas fa-key" />
                <input
                  type="password"
                  name="confirmpassword"
                  placeholder="Confirm Password"
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

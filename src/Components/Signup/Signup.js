import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState("");
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePass = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPass = (e) => {
    setConfirmPass(e.target.value);
  };
  if (user) {
    navigate("/shop");
  }
  const handleSignUp = (e) => {
    e.preventDefault();
    if (password !== confirmPass) {
      setError("Password did not match");
      return;
    }
    if (password.length < 6) {
      setError("Password should have at least 6 characters");
      return;
    }
    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div className="form-container">
      <div>
        <h3 className="form-title">Signup</h3>
        <form onSubmit={handleSignUp}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              onBlur={handleEmail}
              type="email"
              name="email"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              onBlur={handlePass}
              type="password"
              name="password"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm password</label>
            <input
              onBlur={handleConfirmPass}
              type="password"
              name="confirm-password"
              id=""
              required
            />
            <p className="error">{error}</p>
          </div>
          <input className="form-submit" type="submit" value="Sign Up" />
        </form>
        <p>
          Already have an account?
          <Link className="form-link" to="/login">
            Login
          </Link>
        </p>
        <p className="hr">
          <hr />
          or
          <hr />
        </p>
        <button className="form-google-btn">
          <FcGoogle className="google-icon"></FcGoogle>
          <span>Continue with Google</span>
        </button>
      </div>
    </div>
  );
};

export default Signup;

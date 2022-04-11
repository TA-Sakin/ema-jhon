import { FcGoogle } from "react-icons/fc";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import auth from "../../firebase.init";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePass = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    navigate(from, { replace: true });
  }

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="form-container">
      <div>
        <h3 className="form-title">login</h3>
        <form onSubmit={handleLogin}>
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
            <p>{error?.message}</p>
          </div>
          {loading && <p>Loading... </p>}
          <input className="form-submit" type="submit" value="Login" />
        </form>
        <p>
          New to Ema-John?
          <Link className="form-link" to="/signup">
            Create new account
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

export default Login;

//  https://www.figma.com/file/QxcR1BHB60CnZCDbMQ2dmC/ema-john?node-id=0%3A1

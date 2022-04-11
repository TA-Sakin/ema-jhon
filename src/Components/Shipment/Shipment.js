import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const Shipment = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState("");
  const [user] = useAuthState(auth);
  const handleName = (e) => {
    setName(e.target.value);
  };
  //   const handleEmail = (e) => {
  //     setEmail(e.target.value);
  //   };
  const handlePhone = (e) => {
    setPassword(e.target.value);
  };
  const handleAddress = (e) => {
    setConfirmPass(e.target.value);
  };
  const handleSignUp = (e) => {
    e.preventDefault();
  };
  return (
    <div className="form-container">
      <div>
        <h3 className="form-title">Proceed Shipping</h3>
        <form onSubmit={handleSignUp}>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input onBlur={handleName} type="text" name="name" id="" required />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              value={user?.email}
              readOnly
              type="email"
              name="email"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="phone">Phone</label>
            <input
              onBlur={handlePhone}
              type="text"
              name="phone"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="address">Address</label>
            <input
              onBlur={handleAddress}
              type="text"
              name="address"
              id=""
              required
            />
            <p className="error">{error}</p>
          </div>
          <input className="form-submit" type="submit" value="Add Shipping" />
        </form>
      </div>
    </div>
  );
};

export default Shipment;

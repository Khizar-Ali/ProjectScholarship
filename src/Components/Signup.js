import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { addUser } from "../Service/api";

const SignUp = () => {
  const [customerData, setCustomerData] = useState({
    firstName: "",
    lastName: "",
    Email: "",
    Password: "",
  });

  const { firstName, lastName } = customerData;

  const handleChannge = (e) => {
    setCustomerData({ ...customerData, [e.target.name]: [e.target.value] });
  };

  const addDetails = async (e) => {
    e.preventDefault();
    await addUser(customerData);
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    alert("Successfully signed up!");
  };

  return (
    <div>
      <div
        style={{ marginTop: "2%", marginBottom: "2%", marginLeft: "25%" }}
        className="col-6"
      >
        <h1>Sign up</h1>
        <h4> Serving you magic! </h4>
        <form>
          <div className="form-group mt-4">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              name="firstName"
              onChange={(e) => handleChannge(e)}
            />
          </div>

          <div className="form-group mt-2">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              name="lastName"
              onChange={(e) => handleChannge(e)}
            />
          </div>

          <div className="form-group mt-2">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              name="Email"
              onChange={(e) => handleChannge(e)}
            />
          </div>

          <div className="form-group mt-2">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              name="Password"
              onChange={(e) => handleChannge(e)}
            />
          </div>

          <button
            onClick={(e) => addDetails(e)}
            id="navcolor"
            type="submit"
            className="btn text-white text-center mt-3 mb-2 d-grid gap-1 col-6 mx-auto"
          >
            Submit
          </button>
          <p className="forgot-password text-right text-center ">
            Already registered{" "}
            <Link id="col" to="/Login">
              sign in?
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

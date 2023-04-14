import React, { useEffect, useState } from "react";
import "../../styles/signup/signup.css";
import { Button } from "../../components/button";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginUser, logoutUser } from "../../actions/user/actions";

export const SignUp = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser(userName));
    navigate("/home");
  };

  return (
    <div className="container-signup">
      <div></div>
      <form onSubmit={handleLogin}>
        <div className="box">
          <h1 className="title">Welcome to CodeLeap network!</h1>
          <label className="label-form" htmlFor="username">
            Please enter your username
          </label>
          <input
            value={userName}
            type="text"
            onChange={(e) => setUserName(e.target.value)}
          />
          <Button name="button-signup" label="ENTER" type="submit" />
        </div>
      </form>
    </div>
  );
};

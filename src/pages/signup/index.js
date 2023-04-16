import React, { useEffect, useState } from "react";
import "../../styles/signup/signup.css";
import { Button } from "../../components/button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../actions/user/actions";

export const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [isDisable, setIsDisable] = useState(false);
  const { user } = useSelector((rootReducer) => rootReducer.userReducer);
  const isLogged = user.isLogged;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser(userName));
    navigate("/home");
  };
  useEffect(() => {
    function userIslogged(isLogged) {
      if (isLogged) {
        console.log(isLogged);
        return navigate("/home");
      }
      return null;
    }
    userIslogged(isLogged);
  }, [isLogged, navigate]);

  return (
    <>
      {isLogged ? null : (
        <div className="container-signup">
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
              {userName ? (
                <Button
                  isDisable={isDisable}
                  name="button-signup"
                  label="ENTER"
                  type="submit"
                />
              ) : (
                <Button
                  isDisable={!isDisable}
                  name="button-signup-disable"
                  label="ENTER"
                  type="submit"
                />
              )}
            </div>
          </form>
        </div>
      )}
    </>
  );
};

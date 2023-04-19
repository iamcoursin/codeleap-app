import React, { useEffect, useState } from "react";
import "../../styles/signup/signup.css";
import { Button } from "../../components/button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../actions/user/actions";
import { motion } from "framer-motion";

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
    <motion.div
      className="container-signup"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {isLogged ? null : (
        <>
          <motion.h1
            className="title"
            initial={{ y: -150 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            transition={{ type: "spring", stiffness: 50 }}
          >
            Welcome to CodeLeap network!
          </motion.h1>
          <motion.form
            initial={{ y: 130 }}
            animate={{ y: 0 }}
            exit={{ y: 120 }}
            transition={{ type: "spring", stiffness: 50, velocity: 1 }}
            onSubmit={handleLogin}
          >
            <div className="box">
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
          </motion.form>
        </>
      )}
    </motion.div>
  );
};

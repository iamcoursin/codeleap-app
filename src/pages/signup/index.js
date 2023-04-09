import React from "react";
import "../../styles/signup/signup.css";
import { Button } from "../../components/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api/api";

export const SignUp = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api
      .post(
        api[0],
        {
          username: userName,
          title: "create user",
          content: "create user",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) =>{
        localStorage.setItem('user', JSON.stringify(res.data))
        console.log(res.data)
        if(res.status===201){
          navigate("/home");
        }
      }
      )
      .catch((err) => console.log(err));
    console.log(userName);
  };

  return (
    <div className="container-signup">
      <form onSubmit={handleSubmit}>
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

import "../../styles/home/home.css";
import React from "react";
import { Header } from "../../components/header";
import { Box } from "../../components/box";
import { PostList } from "../../components/post-list";
import { useSelector } from "react-redux";

export const Home = () => {
  const { user } = useSelector((rootReducer) => rootReducer.userReducer);
  const name = user.username;

  return (
    <div className="container-home">
      <Header />
      <h1 className="title-home">
        welcome, {name} it's good to have you here with us
      </h1>
      <Box />
      <PostList />
    </div>
  );
};

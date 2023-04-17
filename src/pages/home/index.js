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
      <Box />
      <PostList />
    </div>
  );
};

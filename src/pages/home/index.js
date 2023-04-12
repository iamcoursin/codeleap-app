import React, {useEffect, useState } from "react";
import { Header } from "../../components/header";
import { Box } from "../../components/box";
import "../../styles/home/home.css";
import { PostList } from "../../components/post-list";

export const Home = () => {
  const [ feed, setFeed ] = useState([])
  return (
    <div className="container-home">
      <Header />
      <h1 className="title-home">
        welcome, it's good to have you here with us
      </h1>
      <Box  />
      <PostList />
    </div>
  );
};

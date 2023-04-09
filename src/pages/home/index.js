import React from "react";
import { Header } from "../../components/header";
import { Box } from "../../components/box";
import "../../styles/home/home.css";

export const Home = () => {
  return (
    <div className="container-home">
      <Header />
      <h1 className="title-home">
        welcome, it's good to have you here with us
      </h1>
      <Box />
    </div>
  );
};

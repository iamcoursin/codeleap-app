import React from "react";
import { Header } from "../../components/header";
import { Box } from "../../components/box";
import "../../styles/home/home.css";


export const Home = () => {
  return (
    <div className="container-home"> 
      <Header />
      <h1>Hellow, seja bem-vindo!</h1>
      <Box />
    </div>
  );
}

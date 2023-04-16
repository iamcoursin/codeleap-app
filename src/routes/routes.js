import React from "react";
import { Routes, Route } from "react-router-dom";
import { SignUp } from "../pages/signup";
import { Splath } from "../pages/splath";
import { Home } from "../pages/home";

export const MainRouter = () => {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<Splath />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

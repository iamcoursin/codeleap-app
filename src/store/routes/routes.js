import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../../pages/home";
import { Splath } from "../../pages/splath";

export const MainRouter = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Splath />} />
    </Routes>
  );
};
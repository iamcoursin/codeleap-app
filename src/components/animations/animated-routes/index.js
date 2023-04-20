import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { SignUp } from "../../../pages/signup";
import { Splath } from "../../../pages/splath";
import { Home } from "../../../pages/home";

export const AnimatedRoutes = () => {
  const location = useLocation();
  return (
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Splath />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </AnimatePresence>
  );
};

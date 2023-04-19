import "../../styles/home/home.css";
import React from "react";
import { Header } from "../../components/header";
import { Box } from "../../components/box";
import { PostList } from "../../components/post-list";
import { motion } from "framer-motion";

export const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container-home"
    >
      <Header />
      <Box />
      <PostList />
    </motion.div>
  );
};

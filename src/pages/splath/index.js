import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ColorRing } from "react-loader-spinner";
import { motion } from "framer-motion";
import { logoUrlBlack } from "../../services/helpers/url-logo";
import "../../styles/splath/splath.css";

export const Splath = () => {
  const navigate = useNavigate();
  const goToSignUp = () => {
    return navigate("/signup");
  };
  useEffect(() => {
    setTimeout(() => {
      goToSignUp();
    }, 5000);
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container"
    >
      <motion.img
        className="logo-codeleap"
        src={logoUrlBlack}
        alt="codeleap-logo"
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 50 }}
      />
      <motion.div
        transition={{ type: "spring", stiffness: 50 }}
        initial={{ y: 200 }}
        animate={{ y: 0 }}
      >
        <ColorRing
          visible={true}
          height="80"
          width="75"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#6b59d5", "#6b59d5", "#6b59d5", "#6b59d5", "#6b59d5"]}
        />
      </motion.div>
    </motion.div>
  );
};

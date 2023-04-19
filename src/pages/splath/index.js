import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ColorRing } from "react-loader-spinner";
import { motion } from "framer-motion";
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
        src="https://s3-alpha-sig.figma.com/img/5031/bb4c/f37eef983f86e89b02405594f8267168?Expires=1681689600&Signature=GlBtitTyeTmWFBHiXGJtS~PmXZXIm33HWuI9pWJvECCNwZ7Ni7ZCjGYS~4wYu8lavlCVNMogxom-P7kxaKhemGFFduac8PuNTrmVSNbWpP5bVnopxttZUtfSzAZ9KJiJVPyc-tiGwU7JYEuFdzs9njhqvHj4p3vOrniQ~uIikYqhfXqW2--KUoKTZTwT8VE1d2S7m~h2G8Q7E9YH2as7EW~~Bkp3YP4spVkx-h1dtOJObvnl2uU~atbGuc992Ksf0zhPnIziR~karhQ48XUxyMaKn5ciVgCcUtpppkyOrh9ez0N5EQ1l2lCB~ExMOQVvqBikV7bkzVZmJKBgPQIwgw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        alt="codeleap-logo"
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        exit={{ y: -100 }}
        transition={{ type: "spring", bounce: 0.02 }}
      />
      <motion.div
        transition={{ type: "spring", bounce: 0.02 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ y: 100 }}
      >
        <ColorRing
          visible={true}
          height="100"
          width="250"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#6b59d5", "#6b59d5", "#6b59d5", "#6b59d5", "#6b59d5"]}
        />
      </motion.div>
    </motion.div>
  );
};

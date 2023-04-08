import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/splath/splath.css";

export const Splath = () => {
  const navigate = useNavigate();
  const goToSignUp = setTimeout(() => {
    return navigate("/signup");
  }, 10000);

  return (
    <div className="container">
      <img
        className="logo-codeleap"
        src="https://s3-alpha-sig.figma.com/img/5031/bb4c/f37eef983f86e89b02405594f8267168?Expires=1681689600&Signature=GlBtitTyeTmWFBHiXGJtS~PmXZXIm33HWuI9pWJvECCNwZ7Ni7ZCjGYS~4wYu8lavlCVNMogxom-P7kxaKhemGFFduac8PuNTrmVSNbWpP5bVnopxttZUtfSzAZ9KJiJVPyc-tiGwU7JYEuFdzs9njhqvHj4p3vOrniQ~uIikYqhfXqW2--KUoKTZTwT8VE1d2S7m~h2G8Q7E9YH2as7EW~~Bkp3YP4spVkx-h1dtOJObvnl2uU~atbGuc992Ksf0zhPnIziR~karhQ48XUxyMaKn5ciVgCcUtpppkyOrh9ez0N5EQ1l2lCB~ExMOQVvqBikV7bkzVZmJKBgPQIwgw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        alt="codeleap-logo"
      />
    </div>
  );
};

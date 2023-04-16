import React from "react";
import "../../styles/header/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../actions/user/actions";
export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleLogout() {
    dispatch(logoutUser());
    navigate("/signup");
  }
  return (
    <header className="container-header">
      <h1 className="title-header">codeleap network</h1>
      <FontAwesomeIcon
        onClick={handleLogout}
        className="logout-header"
        icon={faArrowRightFromBracket}
      />
    </header>
  );
};

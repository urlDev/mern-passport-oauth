import React from "react";
import { Link } from "react-router-dom";
import { myContext } from "../Context";
import axios from "axios";
import "./Nav.css";

const Nav = () => {
  const { username } = React.useContext(myContext);
  const logout = async () => {
    const response = await axios.get("http://localhost:4000/logout", {
      withCredentials: true,
    });
    if (response.data === "success") {
      window.location.href = "/";
    }
  };

  return (
    <div className="navbarContainer">
      <ul className="navbar">
        <li>
          <Link to="/"> Home</Link>
        </li>
        {username ? (
          <li onClick={logout}>Logout</li>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Nav;

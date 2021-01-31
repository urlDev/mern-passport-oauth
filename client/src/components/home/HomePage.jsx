import React from "react";
import { myContext } from "../Context";
import "./HomePage.css";

const HomePage = () => {
  const { name } = React.useContext(myContext);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Welcome to my website {name}!</h1>
    </div>
  );
};

export default HomePage;

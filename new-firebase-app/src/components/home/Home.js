import React from "react";
import { useHistory } from "react-router-dom";
import Signup from "../signup/Signup";
import "./styles/Home.scss";
function Home(props) {
  const histroy = useHistory();
  //   console.log(histroy);
  return (
    <div className="home-page">
      <Signup />
    </div>
  );
}

export default Home;

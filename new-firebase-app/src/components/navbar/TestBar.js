import React from "react";
import { useHistory } from "react-router-dom";
import "./styles/Navbar.scss";
function TestBar(props) {
  const history = useHistory();
  console.log(history);

  return (
    <div className="main">
      <div className="inside">
        <div className="left">
          <img src="https://picsum.photos/id/237/200/300"/>
          <h1>home</h1>
        </div>
        <div className="right">
          <button onClick={() => history.push("/login")}>Login</button>
          <button onClick={() => history.push("/signup")}>Signup</button>
        </div>
      </div>
    </div>
  );
}

export default TestBar;

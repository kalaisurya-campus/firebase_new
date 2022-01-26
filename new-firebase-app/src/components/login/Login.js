import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../../firebasefile";
import "./styles/Logins.scss";
function Login(props) {
  const histroy = useHistory();
  //   console.log(histroy);
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const onsubmitfire = async (e) => {
    e.preventDefault();
    console.log(email, password);
    try {
      const result = await auth.signInWithEmailAndPassword(email, password);
      histroy.push("/overhome");
      // alert(`welcome too ${result.user.email}`);
      console.log(result);
      // window.notify.toast({ html: `welcome ${result.user.email}`, classes: "green" });
    } catch (err) {
      // window.M.toast({ html: err.Message, classes: "green" });
      console.log(err);
    }
  };
  return (
    <div className="form_main">
      <div className="split">
        <h1 className="text-center" className="hs">Login </h1>
      </div>
      <button onClick={() => histroy.goBack()} className="signs">click back home</button>
      <div className="form-div">
        <form onSubmit={onsubmitfire}>
          <div>
            <input
              type="email"
              placeholder="Entre email"
              name="email"
              value={email}
              onChange={(e) => SetEmail(e.target.value)}
            ></input>
          </div>
          <div>
            <input
              type="password"
              placeholder="Entre password"
              name="password"
              value={password}
              onChange={(e) => SetPassword(e.target.value)}
            ></input>
          </div>
          <div>
            <button className="logins_button">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

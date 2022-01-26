import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../../firebasefile";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/Signup.scss";
function Signup(props) {
  const histroy = useHistory();
  // console.log(histroy);
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const notify = () => toast("welcome too login page");
  const onsubmitfire = async (e) => {
    e.preventDefault();
    console.log(email, password);

    try {
      const result = await auth.createUserWithEmailAndPassword(email, password);
      histroy.push("/login");
      // alert(`welcome too ${result.user.email}`);
      console.log(result);
      window.notify.toast({
        html: `welcome ${result.user.email}`,
        classes: "green",
      });
    } catch (err) {
      // window.M.toast({ html: err.Message, classes: "green" });
      console.log(err);
    }
  };
  return (
    <div className="sign-ups">
      <h1 className="text-center hs">Signup page</h1>
      <button onClick={() => histroy.goBack()} className="signs">
        Back
      </button>
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
            <button className="logins_button mt-2" onClick={notify}>
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;

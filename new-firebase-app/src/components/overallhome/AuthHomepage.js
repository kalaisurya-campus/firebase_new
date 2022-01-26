import React, { useEffect } from "react";
import "./styles/Overall.scss";
import { auth } from "../../firebasefile";
import { useHistory } from "react-router-dom";
function AuthHomepage(props) {
  const histroy = useHistory();
  useEffect(() => {
    const sun = document.querySelector(".sun");
    const body = document.querySelector("body");
    sun.onclick = function () {
      body.classList.toggle("dark");
    };
  }, []);
  return (
    <div className="overs">
      <section class="scene">
        <button
          className="logouts"
          onClick={() => {
            auth.signOut();
            histroy.push("/login");
          }}
        >
          LogOut
        </button>
        <div class="sun"></div>
        <div class="bg">
          <img
            src="https://i.postimg.cc/Qxtn5scq/police-car-1.png"
            class="car1"
          />
          <img
            src="https://i.postimg.cc/Qxtn5scq/police-car-1.png"
            class="car2"
          />
        </div>
      </section>
    </div>
  );
}

export default AuthHomepage;

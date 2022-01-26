import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import { useEffect, useState } from "react";
import { auth } from "./firebasefile";
import TestBar from "./components/navbar/TestBar";
import AuthHomepage from "./components/overallhome/AuthHomepage";

function App() {
  const [user, SetUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        SetUser(user);
      } else {
        SetUser(null);
      }
    });
  }, []);
  return (
    <div className="App">
      <TestBar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/overhome" component={AuthHomepage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

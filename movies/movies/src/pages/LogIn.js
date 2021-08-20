import React, { useState } from "react";
import "./LogIn.css";
import { auth } from "../fireBase";
import { useHistory } from "react-router";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const signIn = (e) => {
    e.preventDefault(); //prevent refreshing
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };
  const signUp = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password).then((auth) => {
      console.log(auth);
    });
    if (auth) {
      history.push("./");
    }
  };
  return (
    <div className="logIn">
      <h2 className="mailcss">Sign in</h2>
      <form className="formlog">
        <div className="mailcss">Email</div>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="mailcss">Password</div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br></br>
        <button type="submit" onClick={signIn}>
          Sign in
        </button>
      </form>
      <button className="up" onClick={signUp}>
        Sign up
      </button>
    </div>
  );
};

export default LogIn;

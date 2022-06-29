import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    const opts = {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    };

    fetch(
      "https://3001-jdigar-authenticationwi-sf7yspejk0w.ws-eu47.gitpod.io/login?",
      opts
    )
      .then((resp) => {
        if (resp.status === 200) return resp.json();
      })
      .then()
      .catch((error) => {
        console.error("There was an arror!", error);
      });
  };

  return (
    <div className="container-fluid col-4 p-5">
      <h1>Login!</h1>

      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            // type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text"></div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button onClick={handleClick} type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

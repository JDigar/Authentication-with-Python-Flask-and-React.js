import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Navigate } from "react-router-dom";

export const Signup = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit2 = (e) => {
    e.preventDefault();
    actions.signup(email, password);
    Navigate("/login");

    Swal.fire({
      title: "¡ENHORABUENA!",
      html: "Ahora formas parte de la RUTA-3B'S",
      width: 600,
      padding: "3em",
      color: "#000000",
      confirmButtonColor: "#ffc843",
      icon: "success",
      backdrop: `
        rgba(255, 200, 67,0.3)
        
      `,
    });
  };

  return (
    <>
      {store.auth ? (
        <Navigate to="/login" />
      ) : (
        <div className="container-fluid col-4 p-5">
          <h1>Sign up!</h1>

          <form onSubmit={handleSubmit2}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
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
            {/* <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Repear your password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                id="exampleInputPassword1"
              />
            </div> */}

            <button type="submit" className="btn btn-primary">
              Sign up
            </button>
          </form>
        </div>
      )}
    </>
  );
};

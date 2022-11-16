import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";

export const Signup = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const inicioSesion = () => {
    <Navigate to="/login" />;
  };
  const handleSubmit2 = (e) => {
    e.preventDefault(), actions.signup(email, password);
    Swal.fire({
      title: "¡ENHORABUENA!",
      html: "Te hemos fichado ;)",
      h1: "Ya puedes iniciar sesión",
      footer: '<a class="btn" href="/login">INICIAR SESIÓN</a>',
      width: 600,
      padding: "3em",
      showConfirmButton: false,
      color: "#000000",
      icon: "success",
      backdrop: `
        rgba(0, 133, 138, 0.2)

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

            <button type="submit" className="btn">
              Sign up
            </button>
          </form>
        </div>
      )}
    </>
  );
};

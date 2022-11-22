import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";

export const Signup = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  /***********************Verificación de contraseña************************ */
  const [cPassword, setCPassword] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [cPasswordClass, setCPasswordClass] = useState("form-control");
  const [isCPasswordDirty, setIsCPasswordDirty] = useState(false);

  useEffect(() => {
    if (isCPasswordDirty) {
      if (newPassword === cPassword) {
        setShowErrorMessage(false);
        setCPasswordClass("form-control is-valid");
      } else {
        setShowErrorMessage(true);
        setCPasswordClass("form-control is-invalid");
      }
    }
  }, [cPassword]);

  const handleCPassword = (e) => {
    setCPassword(e.target.value);
    setIsCPasswordDirty(true);
  };

  const handleSubmit2 = (e) => {
    e.preventDefault(), actions.signup(email, newPassword);
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
        <div className="box container-fluid col-md-5 col-xs-4 col-sm-2 well p-5">
          <h1 className="text-center">Sign Up</h1>

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
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="form-control"
                id="exampleInputPassword1"
                required
              />
            </div>
            <div className="mb-3">
              <label className=" form-label" htmlFor="">
                Repear yout password
              </label>
              <input
                type="password"
                className={cPasswordClass}
                id="example4"
                onChange={handleCPassword}
                required
              />
            </div>
            {showErrorMessage && isCPasswordDirty ? (
              <div className="p-3"> Las contraseñas no coinciden </div>
            ) : (
              ""
            )}

            <div className="text-center">
              {showErrorMessage && isCPasswordDirty == true ? (
                <button type="submit" className="disabled btn">
                  Sign up
                </button>
              ) : (
                <button type="submit" className="btn">
                  Sign up
                </button>
              )}
            </div>
          </form>
        </div>
      )}
    </>
  );
};

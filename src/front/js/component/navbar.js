import React, { useContext } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const sampleLocation = useLocation();

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        {" "}
        {sampleLocation.pathname === "/" ? null : (
          <Link to="/">
            <button className="btn"> Sign up </button>{" "}
          </Link>
        )}
        <div className="ml-auto">
          {" "}
          {store.auth === true ? (
            <button onClick={() => actions.logout()} className="btn">
              Logout{" "}
            </button>
          ) : (
            <Link to="/login">
              <button className="btn"> Log in </button>{" "}
            </Link>
          )}{" "}
        </div>{" "}
      </div>{" "}
    </nav>
  );
};

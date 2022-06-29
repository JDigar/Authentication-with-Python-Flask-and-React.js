import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <button className="btn btn-primary">Sign up</button>
        </Link>
        <div className="ml-auto">
          {/* <Link to="/signup"> */}
          {store.auth === true ? (
            <button
              onClick={() => actions.logout()}
              className="btn btn-primary"
            >
              Logout
            </button>
          ) : (
            <button className="btn btn-primary" to="/login">
              Log in
            </button>
          )}
          {/* </Link> */}
        </div>
      </div>
    </nav>
  );
};

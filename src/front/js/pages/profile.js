import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Navigate } from "react-router-dom";

export const Profile = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      {" "}
      {store.auth ? (
        <div className="container-fluid col-md-10 col-xs-4 col-sm-4 p-5">
          <h1 className="text-center"> Welcome my friend! </h1>{" "}
          <p className="text-center pt-5 font-italic lead">
            This is your profile, this is really useless but I made it for you
            :){" "}
          </p>
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

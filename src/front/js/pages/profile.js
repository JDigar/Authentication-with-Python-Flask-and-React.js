import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Profile = () => {
  return (
    <div className="container-fluid col-4 p-5">
      <h1>Your profile</h1>
    </div>
  );
};

import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => {
  return (
    <>
      <div className="text-center p-auto m-auto container-fluid col-md-6 col-xs-4 col-sm-4">
        <h1 className="pt-5">HELLO</h1>
        <h2 className="pb-5">WELCOME TO HOME PAGE</h2>
        <Link to="/profile">
          <button className="btn"> GO YOUR PROFILE</button>{" "}
        </Link>
      </div>
    </>
  );
};

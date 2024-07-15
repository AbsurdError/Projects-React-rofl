import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div className="wrap">
      <nav className="HeaderItems">
        <Link to="/registration">
          <p className="HeaderItem">Registration</p>
        </Link>
        <Link to="/authorization">
          <p className="HeaderItem">Authorization</p>
        </Link>
        <Link to="/products">
          <p className="HeaderItem">Products</p>
        </Link>
        <Link to="/about-us">
          <p className="HeaderItem">About Us</p>
        </Link>
        <Link to="/home">
          <p className="HeaderItem">Home</p>
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}
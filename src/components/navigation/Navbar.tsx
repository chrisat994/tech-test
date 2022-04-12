import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/logo/logo.svg';
export default function Navbar() {
  return (
    <nav className="navbar navbar-primary bg-primary mb-4">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            alt=""
            width="100"
            height="40"
          />
        </Link>
      </div>
    </nav>
  );
}

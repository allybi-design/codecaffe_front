import React from "react";
import { Link } from "react-router-dom"

import "../styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img
          src="/images/Coffee-24-512.png"
          className="logo_image"
          alt="logo images"
        />
      </div>
      <div className="links">
        <Link id="navbar_btn" to="/">
          Order a Coffee
        </Link>
        <Link className="navbar_btn" to="/loyalty">
          Loyalty
        </Link>
        <Link className="navbar_btn" to="/location">
          Location
        </Link>
        <Link className="navbar_btn" to="/spill">
          Spill the Beans
        </Link>
        <Link className="navbar_btn" to="/barrista">
          Barrista View
        </Link>
        <Link className="navbar_btn" to="/login">
          Sign In / Register
        </Link>
      </div>
    </nav>
  );
}
